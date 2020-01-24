import React, { useState, useEffect } from 'react';
import api from "./services/api";
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// função em JavaScript que retorna HTML

//TRES CONCEITOS PRINCIPAIS DE REACT(Tudo é baseado nesses tres)
/** 
 * Componente: função que retorna algum conteúdo HTML. Ex: função a seguir "App()"
 *             primeira letra do método sempre tem que ser maiúscula, para demosntrar que é um componente
 *             Bloco isolado de HTML, CSS e Js, o qual não interfere no restante da aplicação
 * Propriedade: informações que o componente PAI passa para o componente FILHO
 * Estado: Informações mantidas pelom componente (Lembrar: imutabilidade) 
 *        informação que o componente vai manipular
 *        useState - função do próprio react para criar um estado
 *        desetruturação: pesquisar
 *        imutabilidade - nunca vou alterar um dado, vou sempre criar um novo dado a partir do valor anterior que eu tinha dele
*/

// nao pode ter um componente atras do outro sem ter um conteúdo ao redor dele
// <></> (fragment: tag sem nomeclatura)

function App() {
  //programação imperativa: criar um estado e o componente deve saber se comportar com base nesse estado
  const [devs, setDevs] = useState([]);
  const [github_username, setGithubUsername] = useState(''); 
  const [techs, setTechs] = useState('');
  //estado
  //toda vez que o usuário entra com dados no input, o estado é alterado
  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      }, 
      {
        timeout: 3000,
      }
    );
  }, []);

  //quando quero que a busca ocorra apenas um única vez
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs()
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })

    setGithubUsername('')
    setTechs('')
    setDevs([...devs, response.data]);
  }

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input name="github_username" id="username_github" value={github_username} onChange={e=> setGithubUsername(e.target.value)} required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" value={techs} onChange={e=> setTechs(e.target.value)}></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)}></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" value={longitude}  onChange={e => setLongitude(e.target.value)}></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
         </form>
        </aside>
      <main>
        <ul>
        {devs.map(dev => (
            <li key={dev._id} className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
          </li>
        ))}
        </ul>
      </main>
     </div>
  );
}

export default App;
