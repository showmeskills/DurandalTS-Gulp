define(['durandal/system','knockout'],(system:DurandalSystemModule,ko:KnockoutStatic)=>{
    class RouterOne{
        firstVm  = ko.observable();
        title = "First Tab";
        loadObservables(id:string) {
            this.firstVm({ id:id, name:'First Tab Content' });
        }
        deactivate(id:string){
            system.log('First Tab Activated');
            return this.loadObservables(id);
        }
        activate(id:string){
            system.log('First Tab Activated');
            return this.loadObservables(id);
        }
    }
    return RouterOne
})