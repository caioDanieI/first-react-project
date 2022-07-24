import './Botao.css'

const Botao = (props) => {
    return(
        <div>
            <button className='Botao'>
                {props.texto}
            </button>
        </div>
    )
}

export default Botao;