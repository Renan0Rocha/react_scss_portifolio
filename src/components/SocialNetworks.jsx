
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/components/socialnetworks.scss';

const socialNetworks = [
    {
        name: 'LinkedIn',
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/renan-rocha919/"
    },
    {
        name: 'GitHub',
        icon: <FaGithub />,
        url: "https://github.com/Renan0Rocha"
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />,
        url: "https://www.instagram.com/renan_rocha_s/"
    }
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.url} className="social-btn" key={network.name}  target="_blank" rel="noopener noreferrer">
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks;