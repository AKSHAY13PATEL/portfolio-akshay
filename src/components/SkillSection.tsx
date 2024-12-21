const SkillSection = () => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="card-wrapper card-wrapper-skill">Node Js</div>
      <div className="flex gap-4">
        <div className="card-wrapper card-wrapper-skill">React Js</div>
        <div className="card-wrapper card-wrapper-skill">Next Js</div>
      </div>
      <div className="card-wrapper card-wrapper-skill">Docker</div>
    </div>
  );
};

export default SkillSection;
