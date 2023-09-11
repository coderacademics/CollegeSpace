import React from "react";
import './CSS styling/suppliespage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SuppliesHeader()
{
    return(
        <div className="supplies_header">
            <h2 className="heading_supplies">SUPPLIES</h2>
            <p className="sub_heading_supplies">Common college supplies used by students</p>
        </div>
    );
}

export default SuppliesHeader;