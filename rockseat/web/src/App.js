import React, { useEffect } from 'react';

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
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => {
        console.log(err);
      }, 
      {
        timeout: 3000,
      }
    );
  }, []);

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input name="github_username" id="username_github" required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude"></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
         </form>
        </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33700047?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Caroline Regalin</strong>
                <span>Ruby on rails</span>
              </div>
            </header>
            <p>asdasd sdasdasd AASD asdsadas sdasdasd asdasdasd adasdasd</p>
            <a href="https://github.com/cregalin">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33700047?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Caroline Regalin</strong>
                <span>Ruby on rails</span>
              </div>
            </header>
            <p>asdasd sdasdasd AASD asdsadas sdasdasd asdasdasd adasdasd</p>
            <a href="https://github.com/cregalin">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33700047?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Caroline Regalin</strong>
                <span>Ruby on rails</span>
              </div>
            </header>
            <p>asdasd sdasdasd AASD asdsadas sdasdasd asdasdasd adasdasd</p>
            <a href="https://github.com/cregalin">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33700047?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Caroline Regalin</strong>
                <span>Ruby on rails</span>
              </div>
            </header>
            <p>asdasd sdasdasd AASD asdsadas sdasdasd asdasdasd adasdasd</p>
            <a href="https://github.com/cregalin">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
     </div>
  );
}

export default App;
