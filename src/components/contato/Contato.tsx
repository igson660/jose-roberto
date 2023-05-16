import { Carousel, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import "./contato.css"
import bannerHorario1 from "../../assets/img-contato/banerHorario1.jpeg"
import bannerHorario2 from "../../assets/img-contato/bannerHorario2.jpeg"


const { Title, Paragraph } = Typography;

function Contatos() {
    return (
        <div>
            <Title level={2}>Contatos</Title>
            <Paragraph>
                Entre em contato comigo por meio dos seguintes canais:
            </Paragraph>
            <ul>
                <li>Telefone: (68) 99202-4942</li>
                <li>Local: Estrada Dias Martins, N°1397 Jardim Alan, Terceiro Andar</li>
            </ul>
            <Title level={3}>Nossos Horarios</Title>
            <Carousel>
            <div key={uuidv4()}>
                    <img
                        src={bannerHorario1}
                        alt="Imagem 1"
                        style={{ width: '78%' }}
                    />
                </div>
                <div key={uuidv4()}>
                    <img
                        src={bannerHorario2}
                        alt="Imagem 2"
                        style={{ width: '70%' }}
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Contatos;
