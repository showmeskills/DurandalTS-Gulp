
define(['plugins/router', 'knockout'],
    (router: DurandalRootRouter, ko: KnockoutStatic) => {
        return {
            router,
            activate: () => {
                router.map([
                    { route:['durandal-lifecycle',""],moduleId:"viewmodels/lifecycle/index",title:"Durandal-lifecycle",nav:true},
                    { route:'durandal-lifecycle2',moduleId:"viewmodels/lifecycle2/index",title:"Durandal-lifecycle2",nav:true},
                ]).buildNavigationModel()
                return router.activate();
            },
        }
    })