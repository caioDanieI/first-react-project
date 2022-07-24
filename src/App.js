import Formulario from './componentes/Formulario';
import Banner from './componentes/Banner'
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log('setColaboradores')
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Inovacao e gestao',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Dev-ops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Data science',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'UX e design',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={
        (colaborador) => aoNovoColaboradorAdicionado(colaborador)
      }
        times={times.map(time => time.nome)}
      />

      {times.map(
        time => <Time key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}

    </div>
  );
}

export default App;
