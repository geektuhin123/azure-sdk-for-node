// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup107/providers/Microsoft.Cdn/profiles/cdnTestProfile3498/endpoints/cdnTestEndpoint8618/purge?api-version=2016-04-02', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e/profileresults/cdnTestProfile3498/endpointresults/cdnTestEndpoint8618?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '8405e8c4-6ab9-4b25-804b-02f4711a6db2',
  'x-ms-client-request-id': '7f77397c-440d-486b-afb0-7523013058d8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e?api-version=2016-04-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8b7481fa-075c-4754-b16f-18f60fd79b5d',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224449Z:8b7481fa-075c-4754-b16f-18f60fd79b5d',
  date: 'Wed, 11 May 2016 22:44:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup107/providers/Microsoft.Cdn/profiles/cdnTestProfile3498/endpoints/cdnTestEndpoint8618/purge?api-version=2016-04-02', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e/profileresults/cdnTestProfile3498/endpointresults/cdnTestEndpoint8618?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '8405e8c4-6ab9-4b25-804b-02f4711a6db2',
  'x-ms-client-request-id': '7f77397c-440d-486b-afb0-7523013058d8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e?api-version=2016-04-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8b7481fa-075c-4754-b16f-18f60fd79b5d',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224449Z:8b7481fa-075c-4754-b16f-18f60fd79b5d',
  date: 'Wed, 11 May 2016 22:44:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"InProgress\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '78',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '5f316c95-5f61-4dee-9311-12e0eca86b86',
  'x-ms-client-request-id': '6fbd2c5b-3818-4210-bef9-6dce8c66d94f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '383ffef6-4f1d-453b-81eb-829396675a2e',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224519Z:383ffef6-4f1d-453b-81eb-829396675a2e',
  date: 'Wed, 11 May 2016 22:45:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"InProgress\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '78',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '5f316c95-5f61-4dee-9311-12e0eca86b86',
  'x-ms-client-request-id': '6fbd2c5b-3818-4210-bef9-6dce8c66d94f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '383ffef6-4f1d-453b-81eb-829396675a2e',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224519Z:383ffef6-4f1d-453b-81eb-829396675a2e',
  date: 'Wed, 11 May 2016 22:45:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"InProgress\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '78',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'aae662dc-097b-4c43-9b13-e095a7d41c20',
  'x-ms-client-request-id': '430abe02-a5a9-4061-a85a-bca53a65b97a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ddcc0a4d-c027-43e7-a9ed-d4915f19fb10',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224550Z:ddcc0a4d-c027-43e7-a9ed-d4915f19fb10',
  date: 'Wed, 11 May 2016 22:45:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"InProgress\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '78',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'aae662dc-097b-4c43-9b13-e095a7d41c20',
  'x-ms-client-request-id': '430abe02-a5a9-4061-a85a-bca53a65b97a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ddcc0a4d-c027-43e7-a9ed-d4915f19fb10',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224550Z:ddcc0a4d-c027-43e7-a9ed-d4915f19fb10',
  date: 'Wed, 11 May 2016 22:45:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ba56e979-ac7b-4865-aaad-4865269e3f5c',
  'x-ms-client-request-id': '1ccea24f-e89a-4011-85b8-a473fbfb9abe',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2900e704-d912-491c-8d4a-abbe75ddd5e7',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224620Z:2900e704-d912-491c-8d4a-abbe75ddd5e7',
  date: 'Wed, 11 May 2016 22:46:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/f4a976ab-0d74-42e5-ae74-709d361b262e?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ba56e979-ac7b-4865-aaad-4865269e3f5c',
  'x-ms-client-request-id': '1ccea24f-e89a-4011-85b8-a473fbfb9abe',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2900e704-d912-491c-8d4a-abbe75ddd5e7',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224620Z:2900e704-d912-491c-8d4a-abbe75ddd5e7',
  date: 'Wed, 11 May 2016 22:46:20 GMT',
  connection: 'close' });
 return result; }]];