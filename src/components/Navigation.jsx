import '../styles/Navigation.style'
import { NavigationContainer } from "../styles/Navigation.style";
import { FaAngleUp, FaWhatsapp } from "react-icons/fa";

function Navigation() {
    return (
        <NavigationContainer>
            <div className='arrow_icon'>
                <i onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}><FaAngleUp /></i>
            </div>
            <div className='wpp_icon'> 
                <a href="https://api.whatsapp.com/send?phone=5531998321473&text=Ol%C3%A1%20venho%20do%20site,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener noreferrer">
                    <i><FaWhatsapp /></i>
                </a>
            </div>
        </NavigationContainer>
    );
}

export default Navigation;