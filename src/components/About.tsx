import { Carousel, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/img-about/1.jpg';
import img2 from '../assets/img-about/2.jpg';
import img3 from '../assets/img-about/3.jpg';
import img4 from '../assets/img-about/4.jpg';

const imgs = [img1, img2, img3, img4];
const { Title, Paragraph } = Typography;

function About() {
    return (
        <div
            style={{
                padding: '50px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Title
                level={2}
                style={{ textAlign: 'center', lineHeight: '50px' }}
            >
                José Roberto Viana
            </Title>
            <Carousel autoplay easing="linear" dots={false}>
                {imgs.map((img, i) => (
                    <div key={uuidv4()}>
                        <picture
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={img}
                                alt={`img ${i + 1}`}
                                style={{
                                    maxWidth: '400px',
                                    maxHeight: '400px',
                                }}
                            />
                        </picture>
                    </div>
                ))}
            </Carousel>
            <Paragraph
                style={{
                    textIndent: '4rem',
                    textAlign: 'justify',
                    alignSelf: 'center',
                    fontSize: '1.5rem',
                    maxWidth: '600px',
                }}
            >
                No ano 2000 na cidade de Xapuri, interior do estado do Acre,
                José Roberto iniciou no jiu jitsu com 17 anos, fazendo parte de
                um projeto social onde tinha o sonho de ser competidor. Mas foi
                somente na faixa preta que os títulos vieram e com muito êxito,
                fazendo com que ele conheça quase toda a Europa e se tornando um
                dos maiores medalhistas do estado do Acre.
            </Paragraph>
            <Paragraph
                style={{
                    textIndent: '4rem',
                    textAlign: 'justify',
                    alignSelf: 'center',
                    fontSize: '1.5rem',
                    maxWidth: '600px',
                }}
            >
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
