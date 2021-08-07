define(["durandal/system","durandal/app"],(system:DurandalSystemModule,app:DurandalAppModule)=>{
    class Project{
        name:string;
        description:string;
        constructor(name:string,description:string){
            this.name = name;
            this.description = description;
        }
        canActivate () {
            //如果有canActive 优先触发
            //进入时候触发，返回true or false，来取消activate
            return app.showMessage('Do you want to view ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
        };
    
        activate() {
            //进入时候触发，canActive => true,触发
            system.log('Model Activating', this);
        };
    
        canDeactivate() {
            //如有canDeactivate 离开页面时候优先触发,
            //离开的返回true or false 
            return app.showMessage('Do you want to leave ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
        };
    
       deactivate() {
           //当如果canDeactivate 返回true 的时候触发
           //离开当前页面 可以做一些逻辑处理
            system.log('Model Deactivating', this);
        };
    }

    return Project;
})