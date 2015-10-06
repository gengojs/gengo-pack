# gengo-pack
The default gengo-pack for gengojs

[![Build Status](https://travis-ci.org/gengojs/gengo-pack.svg?branch=master)](https://travis-ci.org/gengojs/gengo-pack-default-pack)

This is the default gengo-pack that contains the following plugins:


* [gengojs-default-api](https://github.com/gengojs/gengo-pack-default-api)
* [gengojs-default-backend](https://github.com/gengojs/gengo-pack-default-backend)
* [gengojs-default-header](https://github.com/gengojs/gengo-pack-default-header)
* [gengojs-default-localize](https://github.com/gengojs/gengo-pack-default-localize)
* [gengojs-default-parser](https://github.com/gengojs/gengo-pack-default-parser)
* [gengojs-default-router](https://github.com/gengojs/gengo-pack-default-router)

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