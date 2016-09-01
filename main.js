requirejs.config({
    paths: {
        'jquery': "scripts/lib/jquery-1.8.0",
        'angular': "scripts/lib/angular",
        'app': 'scripts/app',
        'bootstrap': 'scripts/bootstrap'

    },
   shim:{
    'angular': {
            deps: ['jquery'],
            exports: 'angular'
        }
      },
    deps: ['scripts/bootstrap.js']
});

