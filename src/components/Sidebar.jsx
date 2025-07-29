import Avatar from "../img/eu.jpg";
import "../styles/components/sidebar.scss";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";


const Sidebar = () => {
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="Renan Rocha" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="#" className="btn">Download currículo</a>
        </aside>
    );
}

export default Sidebar;