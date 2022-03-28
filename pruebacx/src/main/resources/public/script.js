
var restRequest = gapi.client.request({
    'path': 'https://people.googleapis.com/v1/people/me/connections',
    'params': {'sortOrder': 'LAST_NAME_ASCENDING'}
  });


  console.log(restRequest)