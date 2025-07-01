import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Ball from "./canvas/Ball";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="flex flex-col w-28 h-28 text-center justify-center gap-1" key={tech.name}>
          <BallCanvas icon={tech.icon} name={tech.name} />
          <p className="text-secondary">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
