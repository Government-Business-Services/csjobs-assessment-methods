var jobtitle = [
  'Challenger',
  'Strategic',
  'Mission',
  'Visionary',
  'Change agent',
  'Authentic',
  'Emotionally intelligent',
  'Inclusive',
  'Influencer',
  'Problem solver',
  'Catalyst',
  'Enabler',
  'Motivator',
  'Adaptable',
  'Disciplined'
]
var element = document.querySelector('#jobtitle')
var id = 'autocomplete-default'
accessibleAutocomplete({element: element, id: id, source: jobtitle})
