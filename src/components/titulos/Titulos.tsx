import { CaretDownOutlined } from '@ant-design/icons';
import { FaMedal } from 'react-icons/fa';
import './titulos.css';

const titulos = [
    {
        colocação: '2° Lugar',
        nome: 'Mexíco City Summer International',
        sub: 'Open IBJJF Jiu-jitsu Championship',
        categoria: 'Masculino / Master 1 / Preta / Absoluto',
        ano: '2017',
    },
    {
        colocação: '2° Lugar',
        nome: 'Mexico City Summer International ',
        sub: 'Open IBJJF Jiu-Jitsu Championship 201',
        categoria: 'Masculino / Master 1 / Preta / Pena',
        ano: '2017',
    },
    {
        colocação: '3° Lugar',
        nome: 'Brasilia Internacional',
        sub: 'Open IBJJF Jiu-Jitsu Championship 201',
        categoria: 'Masculino / Master 2 / Preta / Pena',
        ano: '2017',
    },
    // Adicionando mais títulos
    {
        colocação: '1° Lugar',
        nome: 'São Paulo Open',
        sub: 'IBJJF Jiu-Jitsu Championship 2022',
        categoria: 'Masculino / Master 2 / Preta / Leve',
        ano: '2022',
    },
    {
        colocação: '1° Lugar',
        nome: 'Rio International Open',
        sub: 'IBJJF Jiu-Jitsu Championship 2021',
        categoria: 'Masculino / Adulto / Preta / Pluma',
        ano: '2021',
    },
    {
        colocação: '3° Lugar',
        nome: 'Pan American Championship',
        sub: 'IBJJF Jiu-Jitsu Championship 2019',
        categoria: 'Masculino / Adulto / Preta / Pluma',
        ano: '2019',
    },
    {
        colocação: '3° Lugar',
        nome: 'Pan American Championship',
        sub: 'IBJJF Jiu-Jitsu Championship 2019',
        categoria: 'Masculino / Adulto / Preta / Pluma',
        ano: '2019',
    },
    {
        colocação: '3° Lugar',
        nome: 'Pan American Championship',
        sub: 'IBJJF Jiu-Jitsu Championship 2019',
        categoria: 'Masculino / Adulto / Preta / Pluma',
        ano: '2019',
    },
];

export const Titulos = () => {
    return (
        <>
            <h1 className="titulo-page">Títulos</h1>
            <div
                className="titulos-container"
                style={{ display: 'flex', flexWrap: 'wrap' }}
            >
                {titulos.map((t, i) => (
                    <div key={i} className="titulos">
                        <h1 className="titulo">{`${t.colocação}  - ${t.ano}`}</h1>
                        <FaMedal className="circle" />
                        <strong className="infos">
                            {`${t.nome}`}
                            <br />
                            {`${t.sub}`}
                            <br />
                            {t.categoria}
                        </strong>
                    </div>
                ))}
            </div>
        </>
    );
};
