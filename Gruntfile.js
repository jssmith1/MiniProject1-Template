module.exports = function(grunt) {

  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  concat: 
	  {
		  options: 
		  {
		    // define a string to put between each file in the concatenated output
		    separator: ';'
		  },
		  dist: {
		    // the files to concatenate
		    src: ['js/*.js'],
		    // the location of the resulting JS file
		    dest: 'www/js/libs.js'
		  }
	  },
	  
	  uglify: 
	  {
		  dist:
		  {
		    files: {
		      'www/js/libs.js': ['<%= concat.dist.dest %>']
		    }
		  }
	  },
	  
	  less: 
	  {
	      development: 
	      {
	        options: 
	        {
	          compress: true,
	          yuicompress: true,
	          optimization: 2
	        },
	        files: 
	        [{
	  				expand: true,
	  				cwd: "bower_components/bootstrap/less",
	  				src: "**/bootstrap.less",
	  				dest: "www/css/",
	  				ext: ".css"
	        }]
	      }
	  }

  });

  // This will automatically load any grunt plugin you install, such as grunt-contrib-less.
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('package', ['concat', 'uglify'])
};