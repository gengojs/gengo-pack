# gengojs-default-pack
The default gengo-pack for gengojs

[![Build Status](https://travis-ci.org/iwatakeshi/gengojs-default-pack.svg?branch=master)](https://travis-ci.org/iwatakeshi/gengojs-default-pack)

This is the default gengo-pack that contains the following plugins:


* [gengojs-default-api](https://github.com/iwatakeshi/gengojs-default-api)
* [gengojs-default-backend](https://github.com/iwatakeshi/gengojs-default-backend)
* [gengojs-default-header](https://github.com/iwatakeshi/gengojs-default-header)
* [gengojs-default-localize](https://github.com/iwatakeshi/gengojs-default-localize)
* [gengojs-default-parser](https://github.com/iwatakeshi/gengojs-default-parser)
* [gengojs-default-router](https://github.com/iwatakeshi/gengojs-default-router)

## Usage

```javascript

	var gengo = require('gengojs');
	var pack = require('gengojs-default-pack');
	
	// In Express (also applies for Koa)	
	var express = require('express');
	var app = express();
	app.use(gengo({/*options*/, pack())};
	
	// ...
	
	
	// In Hapi
	var Hapi = require('hapi');
	var server = Hapi();
	server.connection({ port: 3000});
	server.register(gengo({/*options*/, pack()), function(error){});
		
	// ...
	
```