import React from "react";
import './CSS styling/suppliespage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../src/suppliescard';
import { Items } from '../src/supply_elements';

function Elements() {
    return (
        <div className="supply_items">
            {Items.map((val,key) => {
                    return <Card key={key} pic={val.item_img} title={val.item_name} info={val.item_info} link={val.item_link}/>;
                })
                }
        </div>
    );
}

export default Elements;