/*
 * grunt-patternlibrary
 * https://github.com/matt-diehl/Pattern-Guide
 *
 * Copyright (c) 2014 Matt Diehl
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('patternlibrary', 'Creates a JSON object from comments in stylesheet used to help generate a style guide/pattern library.', function() {

        var patternlibrary = require('patternlibrary');

        patternlibrary.init(this.data.options);

    });

};
