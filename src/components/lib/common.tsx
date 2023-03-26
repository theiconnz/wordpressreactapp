import React from 'react'

interface CommonProps {
    item?: string
}

class Common extends React.Component<any, any>{
    constructor(Props: CommonProps) {
        super(Props);
    }

    iterateSearch(haystack: [], needle:string){
        if(haystack.length<=0){
            return false;
        }
        return  haystack.filter((item: {slug:string}) => item.slug === needle );
    }

    createMenus(menus:[]){
        var newresults:any = [];
        menus.forEach(function(data, index) {
            //var slug = menus[key]["slug"];console.log(slug);
            var menuidexsists =  newresults.filter((item: {menuname:string}) => item.menuname === menus[index]['slug'] );
            var items : { link : string , title : number}[] = []
            if(menuidexsists.length<=0){
                var tmp = {
                    menuname: menus[index]['slug'],
                    items : items
                }
                tmp.items.push({ link:menus[index]['n_name'], title:menus[index]['n_title']})
                newresults.push(tmp);
            } else {
                let idx = newresults.findIndex( (item: {menuname:string}) => item.menuname === menus[index]['slug'] );
                newresults[idx].items.push({ link:menus[index]['n_name'], title:menus[index]['n_title']})
            }
        });
        return newresults;
    }

    getMenu(menus:[], menuid:string='header-menu'){
        var menu = menus.filter((item: {menuname:string}) => item.menuname === menuid )
        return menu[0]['items'];
    }

}

export default Common;