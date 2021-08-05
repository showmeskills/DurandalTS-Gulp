
define(['plugins/router', 'knockout','durandal/system'],
(router:DurandalRouter,ko:KnockoutStatic,system:DurandalSystemModule)=>{
    const masterVm = ko.observable();
    const childRouter = router
        .createChildRouter()
        // makeRelative moduleId 是子页面的路由, from父路由过来, dynamicHash哈市值(:id)
        .makeRelative({moduleId:'viewmodels/routerDemo',fromParent:true,dynamicHash:':id'})
        .map([
            {route:['first', ''],moduleId:"routerOne",title:'First',nav:true,hash:"#first"},
            {route:'second',moduleId:'routerTwo',title:'Second',nav:true},
            {route:'third',moduleId:'routerThree',title:"Third",nav:true},
        ]).buildNavigationModel();
    const activate = (id:string)=>{
        system.log('Master View111111111 activate'+ id+ "Activated")
        return loadObservables(id);
    }
    const deactivate = ()=>{
        system.log(`Master View222222222 deactivate ${masterVm().id}`)
    }
    const loadObservables = (id:string)=>{
        masterVm({id:id,name:"Master"})
    }
    return{
        router:childRouter,
        activate,
        deactivate,
        masterVm
    }
})