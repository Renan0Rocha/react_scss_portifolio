import { DiCss3, DiHtml5, DiJsBadge, DiMysql, DiNodejsSmall, DiReact } from 'react-icons/di';
import '../styles/components/technologiescontainer.scss';

const technologies = [
    { id: 'html5', name: 'HTML5', icon: <DiHtml5 /> },
    { id: 'css3', name: 'CSS3', icon: <DiCss3 /> },
    { id: 'javascript', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
    { id: 'nodejs', name: 'Node.js', icon: <DiNodejsSmall /> },
    { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
];

const TechnologiesContainer = () => {
    return <div className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map(tech => (
                <div className="technology-card" id={tech.id} key={tech.id} >
                    {tech.icon}
                    <div className="technology-info">
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
};

export default TechnologiesContainer;
