from plus_api import api
from publication_filters import check_acknowledgemnt_text_contains_grant_information, check_publication_date, check_publication_type
from publication_ids import publication_ids
import csv
import re
import datetime
import plus_definitions

def import_pubs(qa_file):
  with open(qa_file, mode='r') as publication_file:
      reader = csv.DictReader(publication_file)
      return list(reader)

def get_plus_publications():
  response = api.get("publications/?detail=true")
  return response["Publications"]

def get_publication_info_plus(doi, plus_publications):
  publication = [publication for publication in plus_publications if publication['doi'] == doi]
  if len(publication) == 1:
    return publication[0]
  else:
    return {}


def format_qa_publications(publications): # formats qa publication into same format as plus and fetches missing info from plus
  plus_publications = get_plus_publications()
  for publication in publications:
    publication['doi'] = publication['doi']
    publication['id'] = '' # plus_id
    publication['title'] = publication['title']
    publication['publication_date'] = ''
    publication['publication_year'] = publication['year of publication']
    publication['publication_url'] = publication['link to publication'] if publication['link to publication'] != 'None' else ''
    publication['ranked_authors'] = publication['authors']
    publication['peer_reviewed'] = publication['peer reviewed']
    if publication['open access'] == "Gold":
      publication['open_access'] = "gold"
    elif publication['open access'] == "Green":
      publication['open_access'] = "green"
    else:
      publication['open_access'] = "no"
    publication['type_of_publication'] = publication['type of publication']
    publication['publisher'] = publication['publisher']
    publication['acknowledgement_text'] = ''
    publication['publication_archive_url'] = publication['repository link'] if publication['repository link'] != 'None' else ''
    publication['publication'] = ''
    plus_data = get_publication_info_plus(publication['doi'], plus_publications)
    if plus_data:
      publication['id'] = plus_data['id'] # plus_id

def export_pubs(file_name, publications, mapping):
  with open(file_name, mode='w') as publication_file:
      wr = csv.writer(publication_file, delimiter=',')
      wr.writerow(mapping) # header
      for publication in publications:
        wr.writerow([publication[key] for key in mapping] )

def run():
  qa_publications = import_pubs("qa_publications.csv")
  format_qa_publications(qa_publications)
  with_valid_doi = list(filter(lambda x: x['doi'] != None and re.match('^10.', x['doi']), qa_publications))
  without_valid_doi = list(filter(lambda x: x['doi'] == None or not re.match('^10.', x['doi']), qa_publications))
  csv_mapping = ['doi', 'id', 'title', 'publication_date', 'publication_year', 'publication_url', 'ranked_authors',
                  'peer_reviewed', 'open_access', 'type_of_publication', 'publisher', 'publication', 'acknowledgement_text', 'publication_archive_url']
  export_pubs("qa_publications_doi.csv", with_valid_doi, csv_mapping)
  export_pubs("qa_publications_no_doi.csv", without_valid_doi, csv_mapping)

run()
