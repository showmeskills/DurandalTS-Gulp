

define(['plugins/dialog','knockout'],
    (dialog:any,ko:KnockoutStatic)=>{

        class CustomMoalViewModal{
            ipt=ko.observable("")
            handleClose(){
                return dialog.close(this,this.ipt());
            }
            //before close add function
            canDeactivate() {
                return dialog.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', ['Yes', 'No']);
            };
            //show function is static function
            static show(){
                return dialog.show(new CustomMoalViewModal())
            }
        }
        return CustomMoalViewModal
})