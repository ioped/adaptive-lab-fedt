Fweet Loader
============

Instructions
------------
### Serving

You can run this as a simple server. Run the following command in the root directory of the project.

    python -m SimpleHTTPServer


### SCSS

To compile the scss to css you must have the sass gem installed. The gem is included in the Gemfile.

There is a copy of the compiled css in the repository though, so you only need to install sass if you change the scss files. Run these commands to set your local ruby version to the same as mine and install the gems required in the Gemfile.

    rbenv local 2.0.0-p0
    bundle update

In the root directory of the project run the following command to continually update the compiled style.css output file.

    sass --watch css/scss:css


TODO
----
+ Define structure of index.html (partially complete)
+ Write JavaScript functionality
+ Write JavaScript tests
+ More...
