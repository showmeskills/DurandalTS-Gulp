
define(['durandal/app',"./customModal/customModal"],
(app:DurandalAppModule,CustomModal:any)=>{
    return{
       showCustomModal:()=>{
        CustomModal.show().then((response:string)=>{
            app.showMessage(response)
        })
       } 
    }
})