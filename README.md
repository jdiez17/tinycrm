tinycrm
=======

Don't expect serious production-quality code here. I started this project to test modern frameworks in a full-stack application. Trying to follow best practices for most things, but things will be in heavy flux (no pun intended.)

Installation
============

You'll need a Python 3 virtualenv:

    virtualenv -p python3 .

And the dependencies:

    pip install -r requirements.txt

You'll also need npm and bower. Installing this is left as an exercise for the reader. After you have that, install the JS dependencies:

    npm install
    bower install

With any luck, that will have downloaded everything you need. You can compile the static assets like so:

    gulp

And if you use the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension, you can also use the `watch` task:

    gulp watch

Finally, start the backend server:

    python app.py
