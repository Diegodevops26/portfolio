import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/diego-santos-83b109157/" },
  { name: "github", icon: <FaGithub />, url: "https://github.com/Diegodevops26" },
  { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/diego_santos.dev/?next=%2F" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
     {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
