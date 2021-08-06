//here you should import event publisher and subscriber

define(['./publisher/publisher','./subscriber/subscriber'],
(publisher:any, subscriber:any)=>{
    return{
        publisher,
        subscriber
    }
})