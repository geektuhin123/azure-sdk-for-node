// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=APPEND&append=true&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '71b38b85-9094-439c-ab07-aa48aed632a7',
  'set-cookie': [ 'UserPrincipalSession=44c48bc2-a122-4a31-a529-c50749251e01; path=/; secure; HttpOnly' ],
  'server-perf': '[71b38b85-9094-439c-ab07-aa48aed632a7][ AuthTime::1509.33292958998::PostAuthTime::585.941091963241 ][GetCacheEntry :: 00:00:000 ms]%0a[FsOpenStream :: 00:00:084 ms]%0a[OpenNewHandle :: 00:00:086 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:086 ms]%0a[Open :: 00:00:087 ms]%0a[FsGetStreamLength :: 00:00:008 ms]%0a[GetLength :: 00:00:011 ms]%0a[FsAppendStream :: 00:00:255 ms]%0a[Write :: 00:00:261 ms]%0a[APPEND :: 00:00:361 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:09 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=APPEND&append=true&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '71b38b85-9094-439c-ab07-aa48aed632a7',
  'set-cookie': [ 'UserPrincipalSession=44c48bc2-a122-4a31-a529-c50749251e01; path=/; secure; HttpOnly' ],
  'server-perf': '[71b38b85-9094-439c-ab07-aa48aed632a7][ AuthTime::1509.33292958998::PostAuthTime::585.941091963241 ][GetCacheEntry :: 00:00:000 ms]%0a[FsOpenStream :: 00:00:084 ms]%0a[OpenNewHandle :: 00:00:086 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:086 ms]%0a[Open :: 00:00:087 ms]%0a[FsGetStreamLength :: 00:00:008 ms]%0a[GetLength :: 00:00:011 ms]%0a[FsAppendStream :: 00:00:255 ms]%0a[Write :: 00:00:261 ms]%0a[APPEND :: 00:00:361 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:09 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136024940,\"modificationTime\":1464136030173,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '81e863aa-2032-4b03-85e5-aad006d9d3b1',
  'set-cookie': [ 'UserPrincipalSession=958aca9e-dec1-419f-ab48-b3a6ef83cfb5; path=/; secure; HttpOnly' ],
  'server-perf': '[81e863aa-2032-4b03-85e5-aad006d9d3b1][ AuthTime::1528.15474352405::PostAuthTime::588.080820695655 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:068 ms]%0a[GetFileStatus :: 00:00:070 ms]%0a[GETFILESTATUS :: 00:00:071 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:10 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136024940,\"modificationTime\":1464136030173,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '81e863aa-2032-4b03-85e5-aad006d9d3b1',
  'set-cookie': [ 'UserPrincipalSession=958aca9e-dec1-419f-ab48-b3a6ef83cfb5; path=/; secure; HttpOnly' ],
  'server-perf': '[81e863aa-2032-4b03-85e5-aad006d9d3b1][ AuthTime::1528.15474352405::PostAuthTime::588.080820695655 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:068 ms]%0a[GetFileStatus :: 00:00:070 ms]%0a[GETFILESTATUS :: 00:00:071 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:10 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; }]];