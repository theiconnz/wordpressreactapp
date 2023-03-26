import React from "react";
import {useSelector} from "react-redux";
import Common from "../lib/common"

function ListItem(props:{listitem:object}) {
    var item:any = props.listitem;

    return (
        // Wrong! There is no need to specify the key here:
        <li className="nav-item">
            <a className="nav-link" href={item.link} aria-label={item.link} >
                {item.title}
            </a>
        </li>
    );
}


function Navigation() {
    // @ts-ignore
    const menulist = useSelector((store) => store.commonstate.menuslist);
    const common = new Common({});
    const menurender:any = common.getMenu(menulist, 'header-menu');

    return (
        <ul className="navbar-nav mb-2 mb-lg-0 list-group list-group-horizontal">
            {menurender.map((item: object) =>
                <ListItem listitem={item} />
            )}
        </ul>
    )
}

export default Navigation;