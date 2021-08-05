define(["durandal/app","durandal/system","knockout","jquery"],
    (app:DurandalAppModule,system:DurandalSystemModule,ko:KnockoutStatic,$:JQueryStatic,) => {
        class DemoLifeCycle{
            isShow = ko.observable(false);
            handleShow (){
                this.isShow(!this.isShow());
            }
            //当前页面的时候 会执行activate,attached,compositionComplete
            //canDeactivate 首次会触发，使用函数可以更改值 
            // if canDeactivate return true, it will final execute,
            // if canDeactivate return false, it will not execute
            //离开当前页面的时候会执行 deactivate,detached
            activate() {
                //可以使用异步请求
                system.log('Lifecycle1=====>activate :',"1");
            }
            deactivate() {
                //当离开当前页面 可以做一些逻辑处理
                console.log('Lifecycle1=====>deactivate:',"2")
            }
            canDeactivate():boolean {
                //锁定当前页面的路由,路由被取消
                console.log("Lifecycle1=======>canDeactivate:","3")
                //if canDeactivate return false, 当前的viewmodel 不能切换到下一个viewmodel
                //if canDeactivate return true, 当前viewmodel切换到下一个viewmodel 是可以的
                return this.isShow();
            }
            attached(view: ChildNode, parent: ParentNode) {
                system.log('Lifecycle1========>attached',"4");
                // console.log("view====>",view)//获取当前view
                console.log("parent=====>",parent)//获取父元素
                view.after("<div>一下子就没了</div>")
                const parentDOM = parent.querySelectorAll('button')
            }
            compositionComplete(view: HTMLElement) {
                system.log('Lifecycle1========>compositionComplete',"5");
                //console.log("view2====>",view)//获取当前view            
            }
            detached(view: ChildNode) {//its view is removed from the DOM
                //离开当前页面触发
                system.log('Lifecycle1========>detached',"6");
                //console.log("view3=====>",view)//获取当前view
            }
        }

        return DemoLifeCycle
    })