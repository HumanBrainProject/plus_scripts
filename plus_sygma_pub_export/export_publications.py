from plus_api import api
from publication_filters import check_acknowledgemnt_text_contains_grant_information, check_publication_date, check_publication_type
from publication_ids import publication_ids
import csv
import re
import datetime
import plus_definitions

def get_publications():
  response = api.get("publications/?detail=true")
  return response["Publications"]

def filter_publicationsm12(publications):
  filters = [
    lambda x: x['doi'] != None and re.match('^10.', x['doi']), # full doi regex: /^10.\\d{4,9}/[-._;()/:A-Z0-9]+$/i
    lambda x: check_acknowledgemnt_text_contains_grant_information(x),
    lambda x: check_publication_date(x),
    lambda x: check_publication_type(x),
  ]
  return filter_publications(publications, filters)

def filter_publications_on_id(publications, ids):
  filters = [
    lambda x: x['id'] in ids,
    lambda x: x['doi'] != None and re.match('^10.', x['doi']),
  ]
  return list(filter(lambda x: all([f(x) for f in filters]), publications))

def filter_publications(publications, filters):
  return list(filter(lambda x: all([f(x) for f in filters]), publications))

def format_publication(publication):
  publication['title'] = publication['title'].encode('utf-8') if publication['title'] else ""
  publication['ranked_authors'] =publication['ranked_authors'].encode('utf-8') if publication['ranked_authors'] else ""
  publication['publisher'] = publication['publisher'].encode('utf-8') if publication['publisher'] else ""
  publication['place_of_publication'] = publication['place_of_publication'].encode('utf-8') if publication['place_of_publication'] else "Unknown"
  publication['publication'] = publication['publication'].encode('utf-8') if publication['publication'] else ""
  publication['acknowledgement_text'] = publication['acknowledgement_text'].encode('utf-8') if publication['acknowledgement_text'] else ""
  open_access = "no"
  if publication['open_access'] == plus_definitions.OptionPublicationOpenAccessYesGreen:
    open_access = "green"
  if publication['open_access'] == plus_definitions.OptionPublicationOpenAccessYesGold:
    open_access = "gold"
  publication['open_access'] = open_access
  publication['publication_year'] = datetime.datetime.strptime(publication['publication_date'], '%Y-%m-%d').year if publication['publication_date'] != None else ''

def export_pubs(file_name, publications, mapping):
  with open(file_name, mode='w') as publication_file:
      wr = csv.writer(publication_file, delimiter=',')
      wr.writerow(mapping) # header
      for publication in publications:
        format_publication(publication)
        wr.writerow([publication[key] for key in mapping] )

def run():
  publications = get_publications()
  #filtered_publications = filter_publicationsm12(publications)
  filtered_publications = filter_publications_on_id(publications, publication_ids)
  # mapping as expected by kantu script
  csv_mapping = ['doi', 'id', 'title', 'publication_date', 'publication_year', 'publication_url', 'ranked_authors',
                 'peer_reviewed', 'open_access', 'type_of_publication', 'publisher', 'publication', 'acknowledgement_text', 'publication_archive_url',
                 'place_of_publication', 'processing_charges_open_access', 'embargo_length', 'joint_public_private']
  export_pubs("publications.csv", filtered_publications, csv_mapping)

run()
