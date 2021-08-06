define(["durandal/app","knockout"],
(app:DurandalAppModule,ko:KnockoutStatic)=>{
    const received = ko.observableArray<string>([]);
    const subscription = ko.observable();
    const subscribe = ()=>{
        const sub = app.on("event:sample").then((message:string)=>{
            received.push(message);
        })
        subscription(sub)
    }
    const unsubscribe = ()=>{
        subscription().off();
        subscription(null);
    }
    return{
        received,
        subscription,
        subscribe,
        unsubscribe
    }
})