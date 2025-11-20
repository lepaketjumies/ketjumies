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
    bar: "linear-gradient(to left, rgb(255, 17, 0) , rgb(223, 200, 0))",
    title: {
      text: "#fff",
      background: "rgb(245, 220, 0)",
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
