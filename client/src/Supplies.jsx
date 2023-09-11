import React from "react";
import './CSS styling/suppliespage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuppliesHeader from './suppliesHeader';
import HomeFooter from './HomeFooter';
import Navbar from './Navbar';
import Elements from './supplies_elements';


function Supplies() {
    return (
        <>
            <div style={{ backgroundImage: `url(/bgImages/suppliesPage_BG.avif) repeat contain` }}>
                <Navbar color="black" />
                <SuppliesHeader />
                <Elements />
                <HomeFooter />
            </div>
        </>
    );
}

export default Supplies;