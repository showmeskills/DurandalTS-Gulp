
interface DemoViewModel{
    Title:KnockoutObservable<string>;
    Count: KnockoutObservable<number>;
    HandleIncrement():void;
    HandleDecrement():void;
    IsActive: KnockoutObservable<boolean>;
}


define(['knockout'], function (ko:KnockoutStatic) {
    var DemoViewModel = function (this:DemoViewModel) {
        let CountNumber = 0;
        this.Count = ko.observable(CountNumber);
        this.Title = ko.observable("this is a demo on click");
        this.IsActive = ko.observable(false);
        this.HandleIncrement = ()=>{
            this.Count(++CountNumber)
            if(this.Count()>5){
                this.IsActive(true);
            }
        }
        this.HandleDecrement = ()=>{
            this.Count(--CountNumber)
            if(this.Count()<5){
                this.IsActive(false);
            }
        }
    }as any as({new ():DemoViewModel});

    return DemoViewModel;
});