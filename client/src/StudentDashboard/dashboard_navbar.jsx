import React from "react";
import NavLinks  from './nav_items';
import DehazeIcon from '@mui/icons-material/Dehaze';
function Dashboard_Nav() {
    return (
        <div className="dashboard">
            <ul className="sideNav">
                <div className="controller">
                    <DehazeIcon />
                </div>
                {NavLinks.map((val,key) => {
                    return <li key={key} className="verNavLinks" onClick={
                        ()=>{
                            window.location.pathname=val.link
                        }
                    }>
                        <div className="dashboard_icon">{val.icon}</div>
                        <div className="dashboard_title">{val.title}</div>
                    </li>;
                })
                }
            </ul>
        </div>
    );
}
export default Dashboard_Nav;