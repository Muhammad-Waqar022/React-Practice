import "./App.css";
import ProfileCard from "./Components/ProfileCard";
import Navbar from "./Components/Navbar";
import Notification from "./Components/Notification";

function App() {
  const navLinks = [
    { name: "Home", url: "./home",color:"gold" },
    { name: "About", url: "./about",color:"red" },
    { name: "Services", url: "./services",color:"yellow" },
    { name: "Contact Us", url: "./contact us" ,color:"green"},
  ];
  const notificationsArray = [
    {
      message: "Login successful!",
      type: "success",
    },
    {
      message: "Your subscription will expire soon!",
      type: "error",
    },
    {
      message: "Your subscription will expire soon!",
      type: "warning",
    },
    {
      message: "New updates are available!",
      type: "info",
    },
  ];

  const userProfile = [
    {
      message: "New updates are available!",
      type: "info",
      name: "Waqar",
      age: "20",
      bio: "Student | Internee",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4qoGdIKiXByheL8I-M7b8xwEBJ4-i3hkBKZSl6KiBN8IkIztSDMTocIU7uwAYQPfLBs&usqp=CAU",
    },
    {
      message: "Your subscription will expire soon!",
      type: "warning",
      name: "Ahmad",
      age: "22",
      bio: "Engineer | Graduate",
      profilePic:
        "https://tse1.mm.bing.net/th/id/OET.86f00c8c9aeb4b96bf34cda515c08543?w=288&h=594&c=7&rs=1&o=5&pid=1.9",
    },
    {
      name: "Arslan",
      age: "40",
      bio: "Teacher| Scholar",
      profilePic:
        "https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9",

      message: "Your subscription will expire soon!",
      type: "error",
    },
  ];
  return (
    <>
      <div>
        {notificationsArray?.map((noti, index) => (
          <Notification message={noti?.message} type={noti?.type} />
        ))}
      </div>
      <Navbar logoText="Waqar" links={navLinks} />
      <div
        id="cards"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {userProfile?.map((profile, index) => (
          <>
            <ProfileCard object={profile} />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
