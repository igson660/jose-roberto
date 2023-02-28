import { CaretDownOutlined } from '@ant-design/icons';
import { FaMedal } from 'react-icons/fa';
import './titulos.css'

const titulos = [
    {
        colocação: "2° Lugar",
        nome: 'Mexíco City Summer International Open IBJJF Jiu-jitsu Championship',
        ano: '2010',
    },
    {   
        colocação: "2°",
        nome: 'Brasileiro',
        ano: '2011',
    },
];



export const Titulos = () => {
    return (
     //   
        <>
            {titulos.map((t, i) => (
                <h1 key={i}>
                    {`${t.colocação} - ${t.nome} - ${t.ano}`}
                    <FaMedal className='circle'/>
                </h1>
            ))}     
        </>
        
        
    );
};
