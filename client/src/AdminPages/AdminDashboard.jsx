import React from "react";
import '../CSS styling/AdminPagesCSS/AdminDashboard.css'
import ParticleBackground from "./ParticleAnimationBg";
import { Link } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
function AdminDashboard() {
    return <>
        <div className="admin_dashboard_container">
            {/* <ParticleBackground className="particle_animation_admin" /> */}
            <h2 style={{ fontSize: "4em", marginTop: "1em", marginBottom: "1em", textAlign: "center" }}>Welcome Admin</h2>
            <div className="admin_features_container">
                <table className="admin_features_table table table-borderless">
                    <tbody>
                        <tr>
                            <td> <Link style={{ textDecoration: "none" }} to="/imageUpload"><div className="adminoptions"><CloudUploadIcon />&nbsp;&nbsp;&nbsp;Upload Image</div></Link></td>
                            <td><Link style={{ textDecoration: "none" }} to="/admin@clgquora/imageDelete" ><div className="adminoptions"><DeleteIcon />&nbsp;&nbsp;&nbsp; Delete Image</div></Link> </td>
                        </tr>
                        <tr>
                            <td> <Link style={{ textDecoration: "none" }} to="/admin@clgquora/questionPaperUpload"><div className="adminoptions"><CloudUploadIcon />&nbsp;&nbsp;&nbsp;Upload QuestionPaper</div></Link></td>
                            <td><Link style={{ textDecoration: "none" }} to="/admin@clgquora/questionPaperDelete" ><div className="adminoptions"><DeleteIcon />&nbsp;&nbsp;&nbsp;Delete Question Paper</div></Link> </td>
                        </tr>
                        <tr>
                            <td><Link style={{ textDecoration: "none" }} to="/admin@clgquora/notificationUpload"><div className="adminoptions"><CloudUploadIcon />&nbsp;&nbsp;&nbsp;Add new Notice</div></Link></td>
                            <td><Link style={{ textDecoration: "none" }} to="/admin@clgquora/notificationDelete"><div className="adminoptions"><DeleteIcon />Delete Notice</div></Link></td>
                        </tr>
                        <tr>
                            <td><Link style={{ textDecoration: "none" }} to="/admin@clgquora/eventUpload"><div className="adminoptions"><CloudUploadIcon />&nbsp;&nbsp;&nbsp;Add new Event</div></Link></td>
                            <td><Link style={{ textDecoration: "none" }} to="/admin@clgquora/eventDelete"><div className="adminoptions"><DeleteIcon />&nbsp;&nbsp;&nbsp;Delete Event</div></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </>;
};

export default AdminDashboard;