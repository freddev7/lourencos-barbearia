import { FooterContent, FooterContainer, MapContent } from "../styles/Footer.style";
import { FaInstagram } from "react-icons/fa";
import logodf from "../../src/assets/logodf.svg"

function Footer() {
    return (
        <FooterContent>
            <MapContent>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.1232510941495!2d-43.9903736!3d-19.961318300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6962febe3ac77%3A0x332fffbcec3b4f3a!2zTG91cmVuw6dv4oCZcyBCYXJiZWFyaWE!5e0!3m2!1spt-BR!2sbr!4v1694627513888!5m2!1spt-BR!2sbr" width="1200" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Responsive Google Maps"></iframe>
            </MapContent>
            <FooterContainer>
                <div className="icon">
                <p>Acesse o nosso instagram!</p>
                    <a href="https://instagram.com/lourencosbarbearia?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                        <i><FaInstagram /></i>
                    </a>
                </div>
                <div className="auth_prod">
                    <p>Powered by</p>
                    <a href="https://www.designfactoryweb.com.br" target="_blank" rel="noopener noreferrer">
                        <img src={logodf} />
                    </a>
                </div>
            </FooterContainer>
        </FooterContent>
    );
}

export default Footer;