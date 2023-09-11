import React from "react";
import underconstruction from './Pictures/website-builder.png';
function UnderConstruction()
{
    return(
        <div className="underconstruction" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src={underconstruction} />
            <h2>WebPage Under Construction</h2>
        </div>
    );
}
export default UnderConstruction;