from plus_api import api
import csv

def import_sygma_ids(file_name):
  with open(file_name, mode='r') as ids_file:
      reader = csv.DictReader(ids_file)
      return list(reader)

def get_plus_publications():
  response = api.get("publications/?detail=true")
  return response["Publications"]

def add_plus_id(publications):
  plus_publications = get_plus_publications()
  for publication in publications:
    plus_info = get_publication_info_plus(publication['doi'], plus_publications)
    if plus_info:
      publication['plus_id'] = plus_info['id']
    else:
      publication['plus_id'] = None

def get_publication_info_plus(doi, plus_publications):
  publication = [publication for publication in plus_publications if publication['doi'] and publication['doi'].lower().strip().rstrip("/") == doi.lower().strip().rstrip("/")]
  if len(publication) == 1:
    return publication[0]
  else:
    return {}


def export_pubs(file_name, publications, mapping):
  with open(file_name, mode='w') as publication_file:
      wr = csv.writer(publication_file, delimiter=',')
      wr.writerow(mapping) # header
      for publication in publications:
        wr.writerow([publication[key] for key in mapping] )

def run():
  sygma_publications = import_sygma_ids("sygma_ids.csv")
  csv_mapping = ["sygma_id", "plus_id", "doi"]
  add_plus_id(sygma_publications)
  export_pubs("sygma_plus_ids.csv", sygma_publications, csv_mapping)

run()
