/*
 * grunt-yapl
 * https://github.com/matt-diehl/Grunt-YAPL
 *
 * Copyright (c) 2014 Matt Diehl
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('yapl', 'Creates a JSON object from comments in stylesheet used to help generate a style guide/pattern library.', function() {

        var yapl = require('yapl');

        yapl.init(this.data.options);

    });

};
