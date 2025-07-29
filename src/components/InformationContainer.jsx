
import { AiFillEnvironment, AiFillMail, AiFillPhone } from 'react-icons/ai';
import "../styles/components/informationContainer.scss";


const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>Telefone</h3>
                <p>(69) 0000-1143</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillMail id="email-icon" />
            <div>
                <h3>Email:</h3>
                <p>renanro919@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localização:</h3>
                <p>Presidente Médici - RO</p>
            </div>
        </div>
        </section>;
};


export default InformationContainer;