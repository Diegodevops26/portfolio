import TechnologiesContainer from "./TechonologiesConatiner";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";

function MainContent() {
    return (
        <main id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    );
}

export default MainContent;