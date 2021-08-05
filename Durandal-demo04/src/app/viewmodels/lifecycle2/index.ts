define(["durandal/app", "durandal/system", "knockout"],
    (app: DurandalAppModule, system: DurandalSystemModule, ko: KnockoutStatic) => {
        class DemoLifeCycle2 {
            isShow = ko.observable(true);
            handleShow() {
                this.isShow(!this.isShow());
            }
            canDeactivate(){
                return this.isShow();
            }
        }

        return DemoLifeCycle2
    })