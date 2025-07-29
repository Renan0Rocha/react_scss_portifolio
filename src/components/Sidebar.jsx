import Avatar from "../img/eu.jpg";
import "../styles/components/sidebar.scss";

const Sidebar = () => {
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="Renan Rocha" />
        <p className="title">Desenvolvedor</p>
        <p>Redes sociais</p>
        <p>Informações de contato</p>
        <a href="" className="btn">Download currículo</a>
        </aside>
    );
}

export default Sidebar;