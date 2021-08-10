
define(['plugins/router', 'knockout',"jquery"],
    (router: DurandalRootRouter, ko: KnockoutStatic,$:JQueryStatic) => {
        console.log($);
        return {
            router,
            activate: () => {
                router.map([
                  {route:["","home"],moduleId:"viewmodels/Home/index",title:"Home",nav:true},
                  {route:"about",moduleId:"viewmodels/About/index",title:"About",nav:true},
                  {route:"services",moduleId:"viewmodels/Services/index",title:"Services",nav:true},
                  {route:"contact",moduleId:"viewmodels/Contact/index",title:"Contact Us",nav:true},
                ]).buildNavigationModel()
                return router.activate();
            },
        }
    })