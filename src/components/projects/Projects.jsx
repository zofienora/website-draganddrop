import "./Projects.css"
import webone from '../../assets/web1.jpg';
import webtwo from '../../assets/web2.jpg';
import webthree from '../../assets/web3.jpg';


function Projects() {
    return(
        <>
        <div className="container-projects">
            <h2 className="header-project">Projects</h2>
            <h3 className="header-description">personal web projects</h3>
        </div>
        <div className="project">
            <div className="project-itemone">
                <img className="project-one" src={webone} alt="" />
            </div>
        </div>
        <div className="project">
            <div className="project-itemtwo">
                <img className="project-two" src={webtwo} alt="" />
            </div>
        </div>
        <div className="project">
            <div className="project-itemone">
                <img className="project-one" src={webthree} alt="" />
            </div>
        </div>
        </>

    )
};

export default Projects;

