Fweet Loader
============

Instructions
------------
Work in progress...

### SCSS

To compile the scss to css you must have the sass gem installed. The gem is included in the Gemfile, so all you need to do is run `bundle install`.

There is a copy of the compiled css in the repository though, so you only need to install sass if you change the scss files.

    rbenv local 2.0.0-p0
    bundle update

In the root directory of the project run the following command to continually update the compiled style.css output file.

    sass --watch css/scss:css


TODO
----
+ Define structure of index.html (partially complete)
+ Style the page, using SCSS
+ Write JavaScript functionality
+ More...
