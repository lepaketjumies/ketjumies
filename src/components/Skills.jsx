import SkillBar from "react-skillbars";
import "./skills.css";

export default function Skills() {
  const skills = [
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

  const colors = {
    bar: "linear-gradient(to right,rgb(219, 32, 32),rgb(187, 14, 14))",
    title: {
      text: "#fff",
      background: "linear-gradient(to right,rgb(255, 5, 5),rgb(119, 0, 0))",
    },
  };
  return (
    <section>
      <div className="center-container">
        <div className="skills-container">
          <h2>My skills</h2>
          <SkillBar skills={skills} colors={colors} />
        </div>
      </div>
    </section>
  );
}
export { Skills };
