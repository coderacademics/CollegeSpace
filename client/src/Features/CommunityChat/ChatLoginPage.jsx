import { useState } from "react";
import axios from "axios";
import '../../CSS styling/CommunityChatCSS/chatlogin.css'

function ChatLoginPage() {
    const [username, setUsername] = useState();
    const [secret, setSecret] = useState();
    return (
        <div className="login-page">
            {/* Login Form */}
            <form onSubmit={onLogin}>
                <h1 className="chat-title">Login</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    name="secret"
                    placeholder="Password"
                    onChange={(e) => setSecret(e.target.value)}
                />
                <button className="btn btn-light" type="submit">LOG IN</button>
            </form>
        </div>
    );
}

export default ChatLoginPage;