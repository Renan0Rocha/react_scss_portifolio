
import { AiFillEnvironment, AiFillMail, AiFillPhone } from 'react-icons/ai';
import "../styles/components/informationContainer.scss";


const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
            <p>Telefone: (69) 0000-1143</p>
        </div>
          <div className="info-card">
            <AiFillMail id="email-icon"/>
            <p>Email: renanro919@gmail.com</p>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="location-icon"/>
            <p>Localização: Presidente Médici - RO</p>
        </div>
    </section>;
};


export default InformationContainer;