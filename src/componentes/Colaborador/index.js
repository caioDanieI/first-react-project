import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDoFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDoFundo }}>
                <img src={imagem} alt='profile' />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador