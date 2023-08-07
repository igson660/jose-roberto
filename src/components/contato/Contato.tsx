import { Typography, Table, Button, Collapse } from 'antd'; // Importe o componente Collapse
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'; // Importe o useState para gerenciar o estado
import './contato.css';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse; // Desestruture o componente Panel do Collapse

function Contatos() {
    const horariosDataSource = [
        {
            key: uuidv4(),
            categoria: 'Inicicante/Intermediário',
            diaSemana: 'Seg a Sex',
            horario: '10h30',
        },
        {
            key: uuidv4(),
            categoria: 'Iniciante/Intermediário',
            diaSemana: 'Seg, Qua e Sex',
            horario: '12h00',
        },
        {
            key: uuidv4(),
            categoria: 'Competição',
            diaSemana: 'Ter e Qui',
            horario: '12h00',
        },
        {
            key: uuidv4(),
            categoria: 'Iniciante/Intermediário',
            diaSemana: 'Seg, Qua e Sex',
            horario: '15h00',
        },
        {
            key: uuidv4(),
            categoria: 'Avançado',
            diaSemana: 'Seg a Sex',
            horario: '17h20',
        },
        {
            key: uuidv4(),
            categoria: 'Iniciante',
            diaSemana: 'Ter e Qui',
            horario: '18h30',
        },
        {
            key: uuidv4(),
            categoria: 'Intermediário',
            diaSemana: 'Seg, Qua e Sex',
            horario: '18h30',
        },
        {
            key: uuidv4(),
            categoria: 'Iniciante',
            diaSemana: 'Seg, Qua e Sex',
            horario: '19h40',
        },
        {
            key: uuidv4(),
            categoria: 'Intermediário',
            diaSemana: 'Ter e Qui',
            horario: '19h40',
        },
        {
            key: uuidv4(),
            categoria: 'Iniciante/Intermediário',
            diaSemana: 'Seg, Qua e Sex',
            horario: '20h40',
        },
        {
            key: uuidv4(),
            categoria: 'NO GI',
            diaSemana: 'Ter e Qui',
            horario: '20h40',
        },
    ];

    const horariosColumns = [
        {
            title: 'Categoria',
            dataIndex: 'categoria',
            key: 'categoria',
        },
        {
            title: 'Dia da Semana',
            dataIndex: 'diaSemana',
            key: 'diaSemana',
        },
        {
            title: 'Horário',
            dataIndex: 'horario',
            key: 'horario',
        },
    ];

    const categorias = [
        ...new Set(horariosDataSource.map((item) => item.categoria)),
    ];
    const [horariosPorCategoria, setHorariosPorCategoria] = useState<{
        [key: string]: boolean;
    }>({});

    const onCategoriaClick = (categoria: string) => {
        setHorariosPorCategoria((prevHorariosPorCategoria) => ({
            ...prevHorariosPorCategoria,
            [categoria]: !prevHorariosPorCategoria[categoria],
        }));
    };

    return (
        <div>
            <h1 className="contato-page">Contatos</h1>
            <Paragraph>
                Entre em contato comigo por meio dos seguintes canais:
            </Paragraph>
            <ul>
                <li>Telefone: (68) 99202-4942</li>
                <br />
                <li>
                    Local: Estrada Dias Martins, N°1397 Jardim Alan, Terceiro
                    Andar
                </li>
                <br />
            </ul>
            <Title level={3}>Nossos Horários</Title>
            <Collapse>
                {categorias.map((categoria) => (
                    <Panel
                        header={categoria}
                        key={categoria}
                    
                    >
                        <Table
                            dataSource={horariosDataSource.filter(
                                (item) => item.categoria === categoria
                            )}
                            columns={horariosColumns}
                            pagination={false}
                            bordered={false}
                        />
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
}

export default Contatos;
