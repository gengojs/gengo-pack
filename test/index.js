/*global describe, it*/
// Dependencies
var assert = require('chai').assert;
var core = require('gengojs-core');
var pack = require('../');
var wrapper = require('gengojs-wrappify/es6');
var request = require('supertest');
var _ = require('lodash');
// var path = require('path');
// Servers
var koa = require('koa');
var hapi = require('hapi');
var express = require('express');
// App
var app = {
  koa: koa(),
  hapi: new hapi.Server(),
  express: express()
};
// Wrap the core
var wrap = wrapper(core({}, pack));
// var routed = wrapper(core({
//   backend: {
//     directory: path.normalize(__dirname +
//       '/fixtures/locales/routed')
//   }
// }, pack));
// var unrouted = wrapper(core({
//   backend: {
//     directory: path.normalize(__dirname +
//       '/fixtures/locales/unrouted')
//   }
// }, pack));

// koa router
// var router = require('koa-router')();

describe('gengo-pack', function() {
  'use strict';
  describe('plugins', function() {
    // API tests
    describe('api', function() {
      // Koa
      describe.only('koa', function() {
        app.koa.use(wrap.koa());

        describe('\'__\' , \'__l\'', function() {
          it('should exist', function(done) {
            request(app.koa.listen()).get('/').expect({
              __: true,
              __l: true
            }, done);
          });
        });
      });
      // Express
      describe('express', function() {
        app.express.use(wrap.express());
        app.express.use(function(req, res) {
          res.send({
            __: !_.isUndefined(req.__) || false,
            __l: !_.isUndefined(req.__l) || false
          });
        });

        describe('\'__\' , \'__l\'', function() {
          it('should exist', function(done) {
            request(app.express).get('/').expect({
              __: true,
              __l: true
            }, done);
          });
        });
      });
      // Hapi
      describe('hapi', function() {
        app.hapi.connection({
          port: 3000
        });
        app.hapi.register(wrap.hapi(), function() {});
        describe('\'__\' , \'__l\'', function() {
          it('should exist', function(done) {
            app.hapi.inject('/', function(res) {
              assert.isDefined(res.request.__);
              assert.isDefined(res.request.__l);
              done();
            });
          });
        });
      });
    });
    // Parser tests
    describe('parser', function() {
      // Koa
      describe('koa', function() {
        describe('notations', function() {
          describe('phrase', function() {
            describe('basic phrase', function() {
              // Set wrapper
              app.koa.use(wrap.koa());
              app.koa.use(function*(next) {
                var __ = this.request.__;
                this.body = {
                  result: __('Hello')
                };
                yield next;
              });
              it('should output "Hello"', function(done) {
                request(app.express).get('/').expect({
                  result: 'Hello'
                }, done);
              });
            });

          });
          describe('bracket', function() {

          });
          describe('dot', function() {

          });
          describe('message format', function() {

          });
        });
        // describe('router', function() {
        //   var route = function*(next) {
        //     yield next;
        //   };
        //   router.get('/', route);
        //   router.get('/about', route);
        //   router.get('/api/v1.0', route);
        //   describe('routed', function() {
        //     app.koa.use(routed.koa());
        //     app.koa.use(router.routes());
        //
        //   });
        //   describe('unrouted', function() {
        //
        //   });
        // });
      });
      // Express
      describe('express', function() {
        describe('notations', function() {
          describe('phrase', function() {

          });
          describe('bracket', function() {

          });
          describe('dot', function() {

          });
          describe('message format', function() {

          });
        });
        describe('router', function() {
          describe('routed', function() {

          });
          describe('unrouted', function() {

          });
        });
      });
      // Hapi
      describe('hapi', function() {
        describe('notations', function() {
          describe('phrase', function() {

          });
          describe('bracket', function() {

          });
          describe('dot', function() {

          });
          describe('message format', function() {

          });
        });
        describe('router', function() {
          describe('routed', function() {

          });
          describe('unrouted', function() {

          });
        });
      });
    });
  });
});
