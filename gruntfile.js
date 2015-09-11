module.exports = function (grunt) {
    grunt.initConfig ({
        pkg: grunt.file.readJSON ('package.json'),

        less: {
            development: {
                options: {
                    paths: ["css/"]
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            }
        },

        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: "css/",
                    src: ['*.css', '!*.min.css'],
                    dest: "css/",
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks ('grunt-contrib-less');
    grunt.loadNpmTasks ('grunt-contrib-cssmin');
};
