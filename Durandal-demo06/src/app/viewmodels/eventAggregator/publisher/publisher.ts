define(["durandal/app","knockout"],(app:DurandalAppModule,ko:KnockoutStatic)=>{
    const message = ko.observable("");
    const canPuhlish = ko.computed(()=>message()? true : false);
    const publish = ()=>{
        app.trigger("event:sample",message());
        message("");
    }
    return {
        message,
        publish,
        canPuhlish
    }
})