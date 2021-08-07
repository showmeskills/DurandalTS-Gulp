
define(['plugins/router', 'knockout'],
    (router: DurandalRootRouter, ko: KnockoutStatic) => {
        return {
            router,
            activate: () => {
                router.map([
                   {route:["","widget"],moduleId:"widgets/index",title:"Widget",nav:true},
                   {route:"masterDetail",moduleId:"masterDetail/index",title:"MasterDetails",nav:true},
                ]).buildNavigationModel()
                return router.activate();
            },
        }
    })