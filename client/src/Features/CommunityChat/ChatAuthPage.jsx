import { useState } from "react";
import axios from "axios";
// import '../../CSS styling/CommunityChatCSS/chatlogin.css'
const ChatAuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("/chat_login", { username, secret })
      .then((r) =>{ 
        localStorage.setItem("username",username);
        localStorage.setItem("secret",secret)
        props.onAuth({ ...r.data, secret })  
      }) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("/chat_signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => {
        props.onAuth({ ...r.data, secret })}) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="chat-login-page" style={{
      letterSpacing:"0.5px",
      height:"60vh",
      width:"26vw",
      marginRight:"5em",
      background:"#3f8df3",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:"2vh",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      background:"-webkit-linear-gradient(90deg, rgba(117,84,160,1) 7%, rgba(117,84,160,1) 17%, rgba(106,95,168,1) 29%, rgba(99,103,174,1) 44%, rgba(87,116,184,1) 66%, rgba(70,135,198,1) 83%, rgba(44,163,219,1) 96%, rgba(22,188,237,1) 100%, rgba(0,212,255,1) 100%)"
    }} >
        {/* Login Form */}
        <form onSubmit={onLogin} style={{
          display:"flex",
          flexDirection:"column"
        }}>
          <h2 className="chat-title" style={{
            color: "white",
            textAlign:"center",
            fontSize:"2.5em",
            marginBottom:"2em",
          }}>Chat Login</h2>
          <input 
            style={{
              marginBottom:"2em",
              fontSize:"1.5em"
            }}
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
             style={{
              marginBottom:"2em",
              fontSize:"1.5em"
            }}
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button className="btn btn-light" type="submit">START CHATTING</button>
        </form>

        {/* Sign Up Form */}
        {/* <form onSubmit={onSignup}>
          <div className="title">or Sign Up</div>
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
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">SIGN UP</button>
        </form> */}
    </div>
  );
};

export default ChatAuthPage;