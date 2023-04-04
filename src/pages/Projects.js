import { team1, team2 } from "../assets/assets";
import Wrapper from "../components/Wrapper";
import ProjectsBox from "../components/projects/ProjectsBox";

const Projects = () => {
  const boxes = [];

  for (let i = 0; i < 10; i++) {
    boxes.push(
      <div key={i} className="rounded-lg p-4 bg-slate-800">
        <ProjectsBox
          title="Academy Portal"
          description="Academy Portal Project Design And Programming"
          date="15/2/2023"
          tech1="Programming"
          tech2="Design"
          tech3="Hosting"
          tech4="Marketing"
          price="$25,000"
          progress="w-4/5">
          <div className="flex">
            <img src={team1} className="projects-team" alt="team member" />
            <img src={team2} className="projects-team" alt="team member" />
            <img src={team1} className="projects-team" alt="team member" />
            <img src={team1} className="projects-team" alt="team member" />
            <img src={team2} className="projects-team" alt="team member" />
          </div>
        </ProjectsBox>
      </div>
    );
  }

  return <Wrapper head="Projects">{boxes}</Wrapper>;
};

export default Projects;
