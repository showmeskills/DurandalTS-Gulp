require.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap.bundle',
        'jquery': '../lib/jquery/jquery-3.6.0.slim.min',
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
})

define(['durandal/system', 'durandal/app', 'durandal/viewLocator',],
function(system:DurandalSystemModule,app:DurandalAppModule,viewLocator:DurandalViewLocatorModule,){
     //>>excludeStart("build", true);
     system.debug(true);
     //>>excludeEnd("build");
 
     app.title = 'University Website Design - Easy Tutorials';
 
     app.configurePlugins({
         router:true,
         dialog: true,
        //  set up widget path
        //  widget:{
        //      kinds:['expander']
        //  },
     });
 
     app.start().then(function() {
         //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
         //Look for partial views in a 'views' folder in the root.
         viewLocator.useConvention();
 
         //Show the app by setting the root view model for our application with a transition.
         app.setRoot('viewmodels/shell', 'entrance',"app");
     });
})