import SkillBar from "react-skillbars";
import "./skills.css";

export default function Skills() {
  const skills1 = [
    {
      type: "JavaScript",
      level: 85,
    },
    {
      type: "React",
      level: 80,
    },
    {
      type: "CSS",
      level: 75,
    },
    {
      type: "HTML",
      level: 90,
    },
    {
      type: "Node.js",
      level: 70,
    },
    { type: "Python", level: 65 },
    { type: "Adobe", level: 40 },
  ];

  const skills2 = [
    {
      type: "English",
      level: 90,
    },
    {
      type: "Finnish",
      level: 100,
    },
    {
      type: "Spanish",
      level: 10,
    },
    {
      type: "German",
      level: 15,
    },
    {
      type: "Swedish",
      level: 20,
    },
  ];

  const colors = {
    bar: "linear-gradient(to left, rgb(174, 0, 255) , rgb(6, 97, 216))",
    title: {
      text: "#fff",
      background: "rgb(0, 106, 245)",
    },
  };

  return (
    <section>
      <div className="center-container">
        <div className="skills-container">
          <h2>My technical skills</h2>
          <SkillBar skills={skills1} colors={colors} />
          <h2>Languages I speak</h2>
          <SkillBar skills={skills2} colors={colors} />
        </div>
      </div>
    </section>
  );
}
export { Skills };
