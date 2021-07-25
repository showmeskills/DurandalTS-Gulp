require.config({
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
})


define(["durandal/system", "durandal/app", "durandal/viewLocator"],
    (system: DurandalSystemModule, app: DurandalAppModule, viewLocator: DurandalViewLocatorModule) => {
        
        system.debug(true);
        //set up a html title
        app.title = "Durandal Demo 01";
        //configurePlugins config:Object
        //config router,dialog
        app.configurePlugins({
            router: true,
            dialog: true,
        })
        //start return a Promise
        app.start().then(() => {
            //Allows you to set up a convention for mapping module folders to view folders. 
            //It is a convenience method that customizes convertModuleIdToViewId and translateViewIdToArea under the covers.
            viewLocator.useConvention();
            //setRoot(root(view/module),'transition','html entry div')
            //transition:The transition to use from the previous root (or splash screen) into the new root.
            app.setRoot('viewmodels/shell', "entrance","app");
        })
    })