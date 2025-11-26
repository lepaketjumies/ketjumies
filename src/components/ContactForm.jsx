import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  //Käytetään useState hookkia tallentamaan käyttäjän syöttämät tiedot
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  //Määritetään funcktio, joka lähettää tiedot Discordiin webhookin kautta
  const sendToDiscord = async () => {
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
    console.log("Webhook URL:", webhookUrl);
    //Määritetään kokonaisuus, joka lähetetään Discordiin
    const payload = {
      username: "Contact Form Bot", // Optional: Set a username for the bot
      embeds: [
        {
          title: "Yhteydenottopyyntö jätetty",
          fields: [
            { name: "Lähettäjä", value: username || "N/A", inline: false },
            { name: "Viesti", value: message || "N/A", inline: false },
          ],
          color: 5814783, // Optional: Set an embed color
        },
      ],
    };
    //Varmistetaan että käyttäjä on syöttänyt sähköpostiosoitteen ennen lähettämistä
    try {
      if (!username || !username.trim()) {
        alert("Please enter your email address!");
        return;
      }
      if (!message || !message.trim()) {
        alert("Please enter a message!");
        return;
      }
      //Lähetetään tiedot Discordiin webhookin kautta
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      //Ilmoitetaan käyttäjälle, onko viesti lähetetty onnistuneesti vai ei
      if (response.ok) {
        alert("Message sent!");
        setMessage("");
        setUsername("");
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function handleSwitch() {
    setIsTrue(!isTrue);
  }

  return (
    <div className="test-container">
      <div>
        <p>
          Please input your email, and our customer service agent will contact
          you shortly.
        </p>
      </div>
      <div className="discord-webhook">
        <input
          value={username}
          //Tallennetaan tiedot muuttujaan käyttäjän syöttäessä niitä
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          //Enteriä painamalla lähetetään viesti (vain jos käyttäjä on sähköpostikentässä)
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendToDiscord();
            }
          }}
          type="email"
          placeholder="email (required)"
          required
        />
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="message (required)"
          required
        />
        <button onClick={sendToDiscord}>Send</button>
      </div>
    </div>
  );
}
export { ContactForm };
