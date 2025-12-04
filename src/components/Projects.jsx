import "./Projects.css";
import UnityGame from "./../assets/2d_unity_peli.mp4";
import Peli from "./../assets/project_images/peli.png";
import Megis from "../projects/Megis.jsx";
import Megisclicker from "./../assets/project_images/megis.jpg";
import Servu from "./../assets/project_images/server.png";
import Components from "./../assets/project_images/components.png";
import Vaatteet from "./../assets/project_images/kuvakollaasi.png";
import Nappi from "./Button.jsx";

export default function Projects() {
  return (
    <div>
      <div className="center-container">
        <div className="projects-header">
          <div className="divider"></div>
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
            For my fourth project, I wanted to try something different than just
            using Wordpress, so I ended up making my own eportfolio from scatch
            using JavaScript framework React. I broke the files down into
            components, such as Header, Footer, Contact form and Button
            components. This way I can easily reuse the components in different
            parts of my portfolio, and also keep the code organized and easy to
            maintain.
          </p>
        </div>
        <Nappi img_src={Components} />
        <div className="divider"></div>
        <div className="info-container">
          <h3>Project 5</h3>
          <p>
            For my fifth project, I made a clothing set for a fictional mafia,
            that I play as in the game Grand Theft Auto V. I edited the textures
            using Adobe Photoshop, and then imported them into the game using a
            modding tool called OpenIV.
          </p>
          <p>
            The logo that you can see on the bottom right corner, was made with
            Canva.
          </p>
          <p>
            This image showcases custom texture work created by me. Base
            character models and original assets belong to Rockstar Games /
            Take-Two Interactive.
          </p>
        </div>
        <Nappi img_src={Vaatteet} />
      </div>
    </div>
  );
}
export { Projects };
