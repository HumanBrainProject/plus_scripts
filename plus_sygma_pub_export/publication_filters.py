import plus_definitions
import datetime

def check_acknowledgemnt_text_contains_grant_information(publication): # from qa
  try:
      ak_text = publication['acknowledgement_text']
      ak_text = ''.join([i if ord(i) < 128 else ' ' for i in ak_text])
  except:
      ak_text = 'QA message: Problems with processing acknowledgement information entered.'

  ok_strings = ['604102', '720270', '650003',
                'Human Brain Project', 'HBP', 'Flagship', 'flagship', 'SGA1', 'RUP', 'SGA2']
  for ok_string in ok_strings:
      if ok_string in ak_text:
          return True
  return False

def check_publication_date(publication):
  if not publication['publication_date']: return False
  publication_date = datetime.datetime.strptime(publication['publication_date'], '%Y-%m-%d')
  return publication_date >= datetime.datetime(day=1,month=4,year=2018) and publication_date <= datetime.datetime(day=31,month=3,year=2019)

def check_publication_type(publication):
  if publication['type_of_publication'] == plus_definitions.OptionPublicationTypeArticleInJournal:
    if publication['peer_reviewed'] == False:
      return False
    if publication['open_access'] != plus_definitions.OptionPublicationOpenAccessYesGreen and publication['open_access'] != plus_definitions.OptionPublicationOpenAccessYesGold:
      return False
    return True
  if publication['type_of_publication'] == plus_definitions.OptionPublicationTypeChapterInBook:
    return True
  if publication['type_of_publication'] == plus_definitions.OptionPublicationTypeThesisOrDissertation:
    return True
  return False