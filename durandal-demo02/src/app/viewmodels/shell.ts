
define(['plugins/router'],
    (router:DurandalRootRouter) => {
        return{
            router,
            activate:()=>{
                router.map([
                    {route:"", title:"Modal Demo",moduleId:'viewmodels/modal/index',nav:true}
                ]).buildNavigationModel()
                return router.activate();
            }
        }
})