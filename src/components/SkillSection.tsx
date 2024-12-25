const SkillSection = () => {
  const skills = [
    { front: "JavaScript(ES6+)", back: "TypeScript" },
    { front: "React", back: "Next.js" },
    { front: "Node", back: "Express.js" },
    { front: "MongoDB", back: "Redis" },
    { front: "HTML5/CSS3", back: "Tailwind" },
    { front: "Redux", back: "React Query" },
  ];

  return (
    <div className="flex gap-4 text-center">
      {skills.map((skill) => {
        return (
          <div className="card-flip">
            <div className="card-flip-inner">
              <div className="card-front card-wrapper-skill">{skill.front}</div>
              <div className="card-back card-wrapper-skill">{skill.back}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
