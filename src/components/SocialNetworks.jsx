
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/components/socialnetworks.scss';

const socialNetworks = [
    {
        name: 'LinkedIn',
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/renan-rocha/"
    },
    {
        name: 'GitHub',
        icon: <FaGithub />,
        url: "https://github.com/renanrocha"
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />,
        url: "https://www.instagram.com/renanrocha/"
    }
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer">
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks;