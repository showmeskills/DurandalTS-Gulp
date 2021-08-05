
define(['plugins/router', 'knockout'],
    (router: DurandalRootRouter, ko: KnockoutStatic) => {
        return {
            router,
            activate: () => {
                router.map([
                    { route:['router-demo-02*details',""],moduleId:"viewmodels/routerDemo02/index",title:"Router-Demo02",nav:true},
                    // route ['','设置的路径'] 第一个空白路径的意思是当网页url路径为空时候,也可以访问当前viewmodels
                    // 动态路由设置 router-demo/:id*任意值
                    //hash: '#router-demo/:id' 于view中的连接匹配
                    //view中的 a连接hash值
                    // <li><a href="#router-demo/1/(first) 这里可以直接影响二级路由">Detail 1</a></li>
                    // <li><a href="#router-demo/2/first">Detail 2</a></li>
                    //nav: true 表示 是否在页面中显示路由
                    { route: 'router-demo/:id*details', moduleId: 'viewmodels/routerDemo/index', title: 'Router-Demo01', hash: '#router-demo/:id' },
                ]).buildNavigationModel()
                return router.activate();
            },
        }
    })