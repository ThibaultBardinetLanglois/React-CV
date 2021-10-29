import Navigation from "../components/Navigation";
import Languages from "../components/knowledges/Languages";
import Experience from "../components/knowledges/Experience";
import OtherSkills from "../components/knowledges/OthersSkills";
import Hobbies from "../components/knowledges/Hobbies";


const Knowledges = () => {
    return (
        <div className="knowledges container">
            <Navigation />
            <div className="knowledges-content page-content">
                <Languages />
                <Experience />
                <div className="others-skills-hobbies-block">
                    <OtherSkills />
                    <Hobbies />
                </div>
                
            </div>
        </div>
    )
}

export default Knowledges;