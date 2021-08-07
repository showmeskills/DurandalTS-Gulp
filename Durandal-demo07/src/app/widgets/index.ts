define(['./project', "plugins/widget", "knockout"],
    (Project: any, widget: any, ko: KnockoutStatic) => {
        const projects: KnockoutObservableArray<any> = ko.observableArray([
            new Project('Durandal', 'A cross-device, cross-platform application framework written in JavaScript, Durandal is a very small amount of code built on top of three existing and established Javascript libraries: jQuery, Knockout and RequireJS.'),
            new Project('UnityDatabinding', 'A general databinding framework for Unity3D. Includes bindings for UI composition and samples for the NGUI library.'),
            new Project('Caliburn.Micro', 'Caliburn.Micro is a small, yet powerful framework, designed for building applications across all Xaml Platforms. With strong support for MVVM and other proven UI patterns, Caliburn.Micro will enable you to build your solution quickly, without the need to sacrifice code quality or testability.')
        ])
        const title = ko.observable("");
        const content = ko.observable("");
        const addNewProject = () => {
            if(title().trim().length>0&&content().trim().length>0){
                projects.push(new Project(title(),content()))
                title("");
                content("");
                return;
            }else{
                alert("title or conent cant\'t empty")
            }
        }
        return {
            projects,
            addNewProject,
            title,
            content
        }
    })