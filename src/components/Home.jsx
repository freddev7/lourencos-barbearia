import { useEffect } from "react";
import logo from "../../src/assets/logo.png"
import logo2 from "../../src/assets/logo2.png"
import firstman from "../../src/assets/firstman.png"
import ney from "../../src/assets/ney.png"
import kroos from "../../src/assets/kroos.png"
import bellingham from "../../src/assets/bellingham.png"
import { IoStarSharp, IoRibbonSharp, IoBeer, IoLogoRss, IoSnow, IoDesktopOutline, IoTrophy, IoDuplicate, IoTrailSignSharp } from "react-icons/io5";
import { BsScissors, BsUiChecks } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { Project, HomeContainer, FirstHomeContainer, TitleFirstContainer, TextFirstContainer, SecondHomeContainer, TitleSecondContainer, BarberMan, CompVideo, VideoContainer, ThirdHomeContainer, TitleThirdContainer, FourthHomeContainer, FourthContainer, Logomark, ButtonSignature } from "../styles/Home.style";
import Projects from "./Carousel/Projects"
import air from "../../src/assets/air.jpg"
import freezer from "../../src/assets/freezer.jpg"
import wifi from "../../src/assets/wifi.jpg"
import tv from "../../src/assets/tv.jpg"
import ReactPlayer from 'react-player'
import homevideo from "../assets/homevideo.mp4"
import complayout from "../assets/complayout.png"
import slide from '../assets/slide.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <HomeContainer>
            <FirstHomeContainer id="about">
                <TitleFirstContainer data-aos="fade-left" data-aos-duration="1000">
                    <h1>Elevando o seu nível, de corte em corte!</h1>
                </TitleFirstContainer>
                <TextFirstContainer>
                    <div className="first_content">
                        <img src={logo2} data-aos="fade-right" data-aos-duration="1000"></img>
                        <div className="text_right">
                            <p data-aos="fade-left"  data-aos-duration="1000">A <strong>LOURENÇOS BARBEARIA</strong> é um local que vai muito além do simples corte de cabelo ou barba. Fundada por <u>Lucas Vínicius Lourenço</u>, atuante no mercado há mais de uma decáda, com grande experiência no segmento de barbearia, buscando evoluir constantemente a experiência do cliente.</p>
                            <p data-aos="fade-left"  data-aos-duration="1500">Representando uma tradição enraizada na história, passada de geração em geração a barbearia continua a evoluir, mas sua essência como um espaço tradicional e aconchegante permanece fundamental.</p>
                            <p data-aos="fade-left"  data-aos-duration="2000">Com uma equipe altamente qualificada, nossa barbearia oferece serviços de qualidade excepcional, venha se surpreender.</p>
                        </div>
                    </div>
                </TextFirstContainer>
            </FirstHomeContainer>
            <SecondHomeContainer id="services">
                <TitleSecondContainer>
                    <h1 data-aos="fade-left" data-aos-duration="1000">Um cuidado premium e personalizado!</h1>
                    <div className="stars">
                        <i data-aos="fade-left" data-aos-duration="1000"><IoStarSharp /></i>
                        <i data-aos="fade-left" data-aos-duration="1500"><IoStarSharp /></i>
                        <i data-aos="fade-left" data-aos-duration="2000"><IoStarSharp /></i>
                        <i data-aos="fade-left" data-aos-duration="2500"><IoStarSharp /></i>
                        <i data-aos="fade-left" data-aos-duration="3000"><IoStarSharp /></i>
                    </div>
                </TitleSecondContainer>
                <h2>Com todo conforto que você merece.</h2>
                <img src={slide} alt='slide' />
            </SecondHomeContainer>
            <Project>
                <Projects />
                <i data-aos="fade-left" data-aos-duration="1000"><BsUiChecks /></i>
                <h3>A nossa barbearia está sempre atualizada com as tendências, de cortes de cabelo e estilos de barba, para você desfrutar de um visual moderno e elegante.</h3>
            </Project>
            <ThirdHomeContainer id="team">
                <TitleThirdContainer>
                    <h1 data-aos="fade-right" data-aos-duration="1000">O nosso time joga junto!</h1>
                    <div className="icon_third" data-aos="fade-up" data-aos-duration="1000">
                        <i><BsScissors /></i>
                    </div>
                </TitleThirdContainer>
                <h2>preparados para o seu atendimento.</h2>
                <BarberMan>
                    <div className="barber" data-aos="flip-right" data-aos-duration="2000">
                        <h1 data-aos="fade-left" data-aos-duration="4000">Lucas</h1>
                        <img src={firstman} data-aos="flip-left" data-aos-duration="3000"></img>
                    </div>
                    <div className="barber" data-aos="flip-left" data-aos-duration="2000">
                        <h1 data-aos="fade-left" data-aos-duration="4000">Ícaro</h1>
                        <img src={firstman} data-aos="flip-right" data-aos-duration="3000"></img>
                    </div>
                    <div className="barber" data-aos="flip-right" data-aos-duration="2000">
                        <h1 data-aos="fade-left" data-aos-duration="4000">Igor</h1>
                        <img src={firstman} data-aos="flip-left" data-aos-duration="3000"></img>
                    </div>
                </BarberMan>
                <h2><u>Experiência Profissional</u></h2>
                <i><IoRibbonSharp /></i>
                <h3>Os nossos barbeiros passam por treinamentos semanais, oferecendo serviços de alta qualidade, ajudando a manter a saúde e a aparência do cabelo e da barba.</h3>
            </ThirdHomeContainer>
            <CompVideo>
                <img src={complayout} />
                <VideoContainer>
                    <ReactPlayer
                        url={homevideo}
                        width='100%'
                        height='100%'
                        controls={true}
                        playsinline={true}
                        config={{ file: { attributes: { playsInline: true, }, }, }}
                    />
                </VideoContainer>
                <img src={complayout} />
            </CompVideo>
            <FourthHomeContainer id="signature">
                <FourthContainer>
                    <div className="title_fourth">
                        <h1 data-aos="fade-right" data-aos-duration="1000">Confira as avaliações dos nossos clientes.</h1>
                        <div className="icon_fourth" data-aos="fade-up" data-aos-duration="1000">
                            <i><IoTrophy /></i>
                        </div>
                    </div>
                    <div className="signature_content">
                        <div className="item_signature">
                            <div className="card" data-aos="fade-right" data-aos-duration="1000">
                                <img src={ney}></img>
                                <h3>Neymar</h3>
                                <p>A barbearia oferece um serviço excepcional! Os barbeiros são altamente qualificados e sempre me deixam com o corte de cabelo perfeito.</p>
                            </div>
                            <div className="stroke" data-aos="fade-left" data-aos-duration="1500"></div>
                            <i data-aos="fade-left" data-aos-duration="2000"><FiCheckCircle /></i>
                        </div>
                        <div className="item_signature" >
                            <i data-aos="fade-right" data-aos-duration="2000"><FiCheckCircle /></i>
                            <div className="stroke" data-aos="fade-right" data-aos-duration="1500"></div>
                            <div className="card" data-aos="fade-left" data-aos-duration="1000">
                                <img src={kroos}></img>
                                <h3>Kroos</h3>
                                <p>O ambiente na barbearia é muito acolhedor e amigável. Sempre me sinto bem-vindo e confortável.</p>
                            </div>
                        </div>
                        <div className="item_signature">
                            <div className="card" data-aos="fade-right" data-aos-duration="1000">
                                <img src={bellingham}></img>
                                <h3>Bellingham</h3>
                                <p>Adoro a atenção aos detalhes que os barbeiros têm. Eles realmente se esforçam para garantir que meu corte de cabelo seja impecável.</p>
                            </div>
                            <div className="stroke" data-aos="fade-left" data-aos-duration="1500"></div>
                            <i data-aos="fade-left" data-aos-duration="2000"><FiCheckCircle /></i>
                        </div>
                        <Logomark>
                            <img src={logo}></img>
                        </Logomark>
                    </div>
                    <div className="space_assets">
                        <div className="title_space_assets">
                            <i><IoDuplicate /></i>
                            <h2>Além disso, nosso espaço conta com toda comodidade.</h2>
                            <h3>Temos Ar-Condicionado, freezer com aquela cerveja gelada, Wi-Fi e TV!</h3>
                        </div>
                        <div className="img_assets">
                            <div className="img_assets_one">
                                <div className="item_assets">
                                    <i><IoSnow /></i>
                                    <img src={air} />
                                </div>
                                <div className="item_assets">
                                    <i><IoBeer /></i>
                                    <img src={freezer} />
                                </div>
                            </div>
                            <div className="img_assets_two">
                                <div className="item_assets">
                                    <i><IoLogoRss /></i>
                                    <img src={wifi}></img>
                                </div>
                                <div className="item_assets">
                                    <i><IoDesktopOutline /></i>
                                    <img src={tv}></img>
                                </div>
                            </div>
                        </div>
                        <i data-aos="flip-left" data-aos-duration="1000"><IoTrailSignSharp /></i>
                        <h2>Localizado no coração do Betânia, esquina com Av. Úrsula Paulino!</h2>
                        <h3>Venha bater um papo com a gente e atualizar a régua, agende agora mesmo um horário.</h3>
                    </div>
                </FourthContainer>
                <ButtonSignature as="a" href="https://api.whatsapp.com/send?phone=5531998321473&text=Ol%C3%A1%20venho%20do%20site,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank"><span>AGENDAR</span></ButtonSignature>
            </FourthHomeContainer>
        </HomeContainer >
    )
}

export default Home;