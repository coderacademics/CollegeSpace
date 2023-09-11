import React from "react";
import HomepageFooter from './HomepageFooter';
import Saikat_profile_pic from './Pictures/LinkedIn Profile Pics/saikat_mohanta.jfif'
import Sayan_profile_pic from './Pictures/LinkedIn Profile Pics/SayanRonty_4.jpg'

function HomeFooter() {
    return (
        <div>
            <div className="footer_div creators" style={{ display: "flex", justifyContent: "center", background: "linear-gradient(90deg,#1eb0f6 6.32%,#2bd4df)" }}>
                <HomepageFooter name="Saikat Mohanta" post="Developer" img={Saikat_profile_pic}/>
                <HomepageFooter name="Sayan Saha" post="Developer" img={Sayan_profile_pic} />
            </div>
            <div className="copyright" style={{ backgroundColor: "blue", color: "white", textAlign: "center", background: "linear-gradient(90deg,#1eb0f6 6.32%,#2bd4df)" }}>
                <b>Scottish Church Student Community - 2023</b>
            </div>
        </div>
    );
}
export default HomeFooter;