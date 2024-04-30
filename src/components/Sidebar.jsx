import SocialNetworkContainer from './SocialNetworkContainer';
import InformationContainer from './InformationContainer';

import Avatar from "../img/eu.jpeg";

import '../styles/components/sidebar.sass';

const Sidebar = () =>{
    return(
        <aside id="sidebar">
         <img src={Avatar} alt='Diego Santos' />
         <p className='title'>Desenvolvedor FrontEnd</p>
         <SocialNetworkContainer/>
         <InformationContainer/>
         <a href='https://drive.google.com/file/d/1UnUPje0lxYRlXR_4UHw2ICGkPrOiuXqf/view?usp=sharing' className='btn' >
               Download currículo 
         </a>
        </aside>
    )
}

export default Sidebar
