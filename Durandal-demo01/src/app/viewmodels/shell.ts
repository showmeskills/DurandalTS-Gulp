define(["plugins/router","durandal/app"],
    (router: DurandalRootRouter) => {
        return {
            //return durandal root
            router,
            //activate nav rooter
            activate:()=>{
                return router.map([
                    {route:'',title:'Demo',moduleId:"viewmodels/demo",nav:true},
                    {route:'demo2',title:"Demo2",moduleId:"viewmodels/demo2",nav:true},
                ]).buildNavigationModel().activate();// activate root
            }
        }
    }
)