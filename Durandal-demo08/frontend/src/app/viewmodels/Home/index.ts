define(['knockout'],(ko:KnockoutStatic)=>{
    class Home{
        title = ko.observable("Home Page");
    }
    return Home;
})