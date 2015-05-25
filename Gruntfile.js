module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    stripJsonComments: {
      dist: {
        files: {
          "test/fixtures/locales/routed/dest/en-us.json":
            "test/fixtures/locales/routed/src/en-us.json",
          "test/fixtures/locales/routed/dest/ja.json":
            "test/fixtures/locales/routed/src/ja.json",
          "test/fixtures/locales/unrouted/dest/en-us.json":
            "test/fixtures/locales/unrouted/src/en-us.json",
          "test/fixtures/locales/unrouted/dest/en.json":
            "test/fixtures/locales/unrouted/src/en.json",
          "test/fixtures/locales/unrouted/dest/ja.json":
            "test/fixtures/locales/unrouted/src/ja.json"
        }
      }
    },
    jshint: {
      src: ['index.js', './test/**/*.js'],
      options: {
        jshintrc:'.jshintrc'
      }
    },
    'json-pretty': {
      options: {
        src: ['test/fixtures/locales/routed/dest/', 'test/fixtures/locales/unrouted/dest'],
        indent: 2
      },
    },
    "jsbeautifier": {
      "default": {
        src: ['index.js', 'test/index.js']
      },
      options: {
        js: {
          braceStyle: "collapse",
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: " ",
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: false,
          keepArrayIndentation: false,
          keepFunctionIndentation: false,
          maxPreserveNewlines: 10,
          preserveNewlines: true,
          spaceBeforeConditional: true,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0,
          endWithNewline: true
        }
      }
    }
  });
  grunt.registerTask('default', [
    'jsbeautifier',
    'jshint',
    'stripJsonComments',
    'json-pretty'
  ]);
};
