import { Carousel, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import './about.css';
import img1 from '../../assets/img-about/1.jpg';
import img2 from '../../assets/img-about/2.jpg';
import img3 from '../../assets/img-about/3.jpg';
import img4 from '../../assets/img-about/4.jpg';

const imgs = [img1, img2, img3, img4];
const { Title, Paragraph } = Typography;

function About() {
    return (
        <div className="about-main-container">
            <Title level={2} className="about-title">
                José Roberto Viana
            </Title>
            <Carousel autoplay easing="linear" dots={false}>
                {imgs.map((img, i) => (
                    <div key={uuidv4()}>
                        <picture className="about-picture-carousel">
                            <img
                                src={img}
                                alt={`img ${i + 1}`}
                                className="about-img-carousel"
                            />
                        </picture>
                    </div>                      
                ))}
            </Carousel>
            <br />
            <br />
            <Paragraph className="about-paragraph">
                No ano 2000 na cidade de Xapuri, interior do estado do Acre,
                José Roberto iniciou no jiu jitsu com 17 anos, fazendo parte de
                um projeto social onde tinha o sonho de ser competidor. Mas foi
                somente na faixa preta que os títulos vieram e com muito êxito,
                fazendo com que ele conheça quase toda a Europa e se tornando um
                dos maiores medalhistas do estado do Acre.
            </Paragraph>
            <Paragraph className="about-paragraph">
                Em 2014, Jose Roberto inaugurou sua academia de jiu jitsu na
                capital acreana com ajuda de amigos que fez ao longo do tempo,
                ganhando muito mais experiencia para se tornar o profissional
                que é hoje. Onde sua motivação para continuar treinando e dando
                aula é o prazer de ajudar seus alunos, fazendo com que apliquem
                a filosofia do jiu jitsu dentro e fora da academia
            </Paragraph>
        </div>
    );
}

export default About;
