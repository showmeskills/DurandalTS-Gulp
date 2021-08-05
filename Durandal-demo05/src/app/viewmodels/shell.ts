
define(['plugins/router', 'knockout'],
    (router: DurandalRootRouter, ko: KnockoutStatic) => {
        return {
            router,
            activate: () => {
                router.map([
                    { route:['','durandal-view-composition'],moduleId:"viewmodels/viewComposition/index",title:"view-composition-demo",nav:true},
                ]).buildNavigationModel()
                return router.activate();
            },
        }
    })