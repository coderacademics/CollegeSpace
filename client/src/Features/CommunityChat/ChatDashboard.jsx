import { useState } from "react";

import ChatAuthPage from "./ChatAuthPage";
import ChatsFeedPage from "./ChatsFeedPage";
import '../../CSS styling/CommunityChatCSS/chat.css'
import { useNavigate } from "react-router";
function ChatDashboard() {
  const [user, setUser] = useState();
    const Navigate = useNavigate();
  if (!user) {
    return <ChatAuthPage onAuth={(user) => setUser(user)} />;
  } else {
    {   
        Navigate("/chat")
    }
        // return <ChatsFeedPage />;
  }
}

export default ChatDashboard;