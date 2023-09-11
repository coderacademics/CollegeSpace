import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useParams } from "react-router";
const ChatsFeedPage = () => {
  const username = localStorage.getItem("username");
  const secret = localStorage.getItem("secret");
  console.log(username, secret);
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId="a68e8e6f-9f08-4e34-899e-85e15fb46ed1"
        username={username} // adam
        secret={secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsFeedPage;