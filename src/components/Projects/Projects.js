import React from 'react';
import ProjectCard from './ProjectCard.js'; 
import bandifi from "../../images/projects/bandifi.PNG"
import quaranstream from "../../images/projects/quaranstream.PNG"
import noteTaker from "../../images/projects/note-taker.PNG"
import Workout from "../../images/projects/workout-tracker.png"
import budget from "../../images/projects/budget-tracker.png"
import Motivate from "../../images/projects/motivate-me.PNG"

 
function Projects() {
  return (
<>
    <div>

      <div className="row">
      <ProjectCard
        link="https://mighty-anchorage-71700.herokuapp.com/"
        image={noteTaker}
        projectName="Note Taker"
      />
      <ProjectCard
        link="http://pacific-wave-23407.herokuapp.com/"
        image={Motivate}
        projectName="Motivate"
      />
      </div>

      <div className="row">
      <ProjectCard
        link="https://kcbobbe.github.io/bandifi/"
        image={bandifi}
        projectName="Bandifi"
      />
      <ProjectCard
        link="https://quaranstream.herokuapp.com/"
        image={quaranstream}
        projectName="Quaranstream"
      />
      </div>

      <div className="row">
      <ProjectCard
        link="https://peaceful-plateau-38428.herokuapp.com/"
        image={Workout}
        projectName="Workout Tracker"
      />
      <ProjectCard
        link="https://dry-savannah-70140.herokuapp.com/"
        image={budget}
        projectName="Budget Tracker"
      />
      </div>
    
    </div>
    </>
  )
}
 
export default Projects;
