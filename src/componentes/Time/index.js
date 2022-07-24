import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const borderColor = {
        borderColor: props.corPrimaria
    }

    const background = {
        backgroundColor: props.corSecundaria
    }

    return (
        props.colaboradores.length > 0 && <section className='time' style={background}>
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='colaboradores' key='random'>
                {props.colaboradores.map(
                    colaborador =>
                    <Colaborador
                            corDoFundo={props.corPrimaria}
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            time={colaborador.time}
                        />
                        )}
            </div>
        </section>
    )
}

export default Time