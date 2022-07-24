import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    aoAlterado={valor => setNome(valor)}
                    valor={nome}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    aoAlterado={valor => setCargo(valor)}
                    valor={cargo}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    aoAlterado={valor => setImagem(valor)}
                    valor={imagem}
                />
                <ListaSuspensa
                    label="Time"
                    itens={props.times}
                    aoAlterado={valor => setTime(valor)}
                    valor={props.time}
                    />
                <Botao className='Button' texto="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario