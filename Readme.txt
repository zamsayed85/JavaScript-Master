Section - Objects

Reference Type
Object - NamedValue pair
Named/Value pair - property of Object
Method of the object - property that holds function as a Value


Copying Object

Global Objects
Web Browser - window
Node.js - Global



//Built in default variable called Object and this Object is a function
//Each function in javascript is an Object




Javascript response to statements is undefined


const myCity = {
    city: "New york",
    country: "USA"
}

//Modification of Objects
//dot notation
//bracket notation []



//GLOBAL Objects
Purpose : contain long list of property. and some property constains nested object
1. WINDOW 
 - In Web Browser
Wwindow.document
#document<html lang=​"en">​<head>​<meta charset=​"UTF-8">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">​<title>​JavaScript Startup​</title>​<link rel=​"icon" href=​"JavaScript-logo.png">​<script src=​"index.js">​</script>​</head>​<body>​…​</body>​</html>​
2. GLOBAL
 - In Node.js

 C:\My Projects\JavaScript Master>node
Welcome to Node.js v12.18.4.
Type ".help" for more information.
> global
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
> global.process.version
'v12.18.4'
> global.process.versions
{
  node: '12.18.4',
  v8: '7.8.279.23-node.39',
  uv: '1.38.0',
  zlib: '1.2.11',
  brotli: '1.0.7',
  ares: '1.16.0',
  modules: '72',
  nghttp2: '1.41.0',
  napi: '6',
  llhttp: '2.1.2',
  http_parser: '2.9.3',
  openssl: '1.1.1g',
  cldr: '37.0',
  icu: '67.1',
  tz: '2019c',
  unicode: '13.0'
}
> global.process.versions.node
'12.18.4'
>
> global.process.versions.node
'12.18.4'
> global.console
{
  log: [Function: log],
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  error: [Function: error],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context]
}
> global.console.log
[Function: log]
> console.log("Hello from Node.js")
Hello from Node.js
undefined





/***********METHOD**************/

properties with function as a property value