interface Route{
    route?:Array<string> | string ,
    moduleId?:string, 
    type?:string,
    title?:string,
    nav?:boolean;
}



define(["plugins/router","knockout"],
    (router:DurandalRouter,ko:KnockoutStatic)=>{
        //有多个子路的时候不可以重名字
        const childRouter2 = router.createChildRouter()
        .makeRelative({
            moduleId:"viewmodels/routerDemo02",
            fromParent:true,
        })
        .map([
            {route:['','firstRouter'],moduleId:"router01", title:"Router-01", type:"intro", nav:true},
            {route:'secondRouter',moduleId:"router02", title:"Router-02",type:"details",nav:true},
            {route:'thirdRouter',moduleId:"router03", title:"Router-03",type:"details",nav:true}
        ]).buildNavigationModel();
        const introRouter = ko.computed(()=>{
            return ko.utils.arrayFilter(childRouter2.navigationModel(),(route:Route)=>{
                return route.type === "intro"
            })
        })
        const detailRouter = ko.computed(()=>{
            return ko.utils.arrayFilter(childRouter2.navigationModel(),(route:Route)=>{
                return route.type === "details"
            })
        })

        return{
            router:childRouter2,
            introRouter,
            detailRouter
        }
    })