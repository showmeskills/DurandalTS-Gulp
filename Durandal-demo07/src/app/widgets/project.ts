define(["knockout"],(ko:KnockoutStatic)=>{
     class Project{
        name:KnockoutObservable<string>;
        description:KnockoutObservable<string>;
        constructor(name:string, description:string){
            this.name = ko.observable(name);
            this.description = ko.observable(description);
        }
    }
    return Project;
})