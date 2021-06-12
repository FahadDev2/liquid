let mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets')
.vue()
.sass('src/sass/app.scss','assets');