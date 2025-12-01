import Header from "../components/Header";
import "./Projects.css";
import UnityGame from "./../assets/2d_unity_peli.mp4";
import Peli from "./../assets/project_images/peli.png";
import Megis from "../projects/Megis";
import Megisclicker from "./../assets/project_images/Megis.jpg";
import Servu from "./../assets/project_images/server.png";
import Nappi from "./../components/Button.jsx";
import Footer from "../components/Footer.jsx";

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="center-container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p>Welcome to the Projects page!</p>
        </div>
        <div className="divider"></div>
        <div className="info-container">
          <h3>Project 1</h3>
          <p>
            Megis clicker, a simple clicker game made with React. Originally
            this game was created with python, improvised from the cookie
            clicker game. The goal of the game is to click the megis as many
            times as possible to earn points and kill some time.
          </p>
        </div>
      </div>

      <div className="center-container">
        <Nappi img_src={Megisclicker} />
        <div className="divider"></div>
      </div>
      <h2
        style={{ margin: "0 auto", color: "var(--accent-color)", width: "80%" }}
      >
        Test megis clicker!
      </h2>
      <Megis />
      <div className="center-container">
        <div className="divider"></div>
        <div className="info-container">
          <h3>Project 2</h3>
          <p>
            As my second project, I now present to you my 2D platformer game,
            made with unity and C#. In this game, you control a character that
            can run, jump, and collect items while avoiding obstacles. The game
            features two types of enemies with increasing difficulty, and the
            goal is to reach the end of each level while collecting as many
            items as possible.
          </p>
          <p>
            Below you can see a script from the 2D game, the basic function is
            to trigger a trap when the player enters the trigger area, if player
            comes in contact with the spikes from the trap, it will call a
            function that takes one healthpoint away.
          </p>
        </div>
      </div>
      <div className="center-container">
        <Nappi img_src={Peli} />
        <div className="divider"></div>
        <video
          src={UnityGame}
          style={{ width: "80%", marginBottom: "20px" }}
          controls
        ></video>
        <div className="divider"></div>
      </div>
      <div className="center-container">
        <div className="info-container">
          <h3>Project 3</h3>
          <p>
            For my third project, I created a simple server using Node.js and
            various other JavaScript libraries such as Express.js. The server is
            designed to handle HTTP requests and responses, allowing clients and
            admins to interact with it through a web browser or other HTTP
            clients.
          </p>
          <p>
            The client can "buy" a ticket from my fictional ticket seller
            company, it will then save the users information, such as email,
            phonenumber, public IP address, platform, browser, tickets bought,
            and time of the interaction.
          </p>
          <p>
            Below you can see a portion of the backend server's code. The basic
            function of the code snippet is to render tickets to the website
            from remote database, show clients' information in admin dashboard,
            put more tickets available, and delete the clients personal
            information from our database.
          </p>
        </div>
        <Nappi img_src={Servu} />
        <div className="divider"></div>
        <div className="info-container">
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio
            molestiae minus omnis distinctio quia officia consequatur, voluptas,
            amet voluptate ratione dolorem sit sed. Doloremque mollitia ab
            reiciendis adipisci accusantium.
          </p>
        </div>
        <Nappi img_src={"https://iplaceholder.com/300x300/fff/ccc/png"} />
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
}
