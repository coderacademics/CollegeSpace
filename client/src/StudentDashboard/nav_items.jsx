import React from "react";
import Notification from '@mui/icons-material/Notifications';
import Gallery from '@mui/icons-material/Collections';
import QuestionPaper from '@mui/icons-material/Article';
import Events from '@mui/icons-material/EmojiEvents';
import Dashboard from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
export const NavLinks = [
    {
        title: "Home",
        icon: <Dashboard  />,
        link: "/dashboard"
    },
    {
        title: "Gallery",
        icon: <Gallery  />,
        link: "/gallery"
    },
    {
        title: "CU QuesPaper",
        icon: <QuestionPaper />,
        link: "/questionpaper"
    },
    {
        title: "Events",
        icon: <Events  />,
        link: "/events"
    },
    {
        title: "Notification",
        icon: <Notification  />,
        link: "/notifications"
    },
    {
        title: "E-Paper",
        icon: <NewspaperIcon  />,
        link: "/ENewsPaper"
    }
];

export default NavLinks;