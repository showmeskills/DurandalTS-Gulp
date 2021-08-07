define(['durandal/composition', 'jquery'],
    (composition:any,$:JQueryStatic) => {
        class Ctor{
            settings:any;
            activate(settings:any){
                console.log("settings====>",settings)
                this.settings = settings;
            }
            getHeaderText(item:any){
                console.log("item======>",item);
                console.log("headerProperty====>",this.settings.headerProperty)
                if(this.settings.headerProperty){
                    return item[this.settings.headerProperty];
                }
                return item.toString();
            }
            afterRenderItem(elements:HTMLElement[]){
                //对dom 元素进行操作
                console.log("elements======>",elements)//
                const parts = composition.getParts(elements);
                const $itemContainer = $(parts.itemContainer);
                $itemContainer.hide();
                $(parts.headerContainer).on('click',function(){
                    $itemContainer.toggle('fast');
                })
            }
        }
        return Ctor
    }
)