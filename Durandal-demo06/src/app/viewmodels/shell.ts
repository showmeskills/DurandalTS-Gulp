
define(['plugins/router', 'knockout'],
    (router: DurandalRootRouter, ko: KnockoutStatic) => {
        return {
            router,
            activate: () => {
                router.map([
                    { route:['','event-trigger'],moduleId:"viewmodels/eventAggregator/index",title:"Event-Trigger",nav:true},
                ]).buildNavigationModel()
                return router.activate();
            },
        }
    })