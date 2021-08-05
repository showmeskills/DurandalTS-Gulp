define(["knockout"],(ko:KnockoutStatic)=>{
    //father viewmodel can share observable variables to compose sub-components
    class viewComposition {
        viewOneTitle = ko.observable("this is from father");
        viewTwoTitle = ko.observable("this is also from father");
        viewThreeTitle = ko.observable("this is also from father");
    }
    return viewComposition;
})