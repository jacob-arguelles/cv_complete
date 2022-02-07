import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <figure className="header-figure">
        <img className="porta-header" src="/porta2.jpg" alt="portada" />
      </figure>
      <figure className="Face-Picture">
        <img className="avatar" src="/pp.jpeg" alt="avatar" />
      </figure>
      <h1 className="My-name">Jacob Israel Arguelles</h1>
      <h2 className="Ocupacion">Web Developer</h2>
      <article className="Info_Personal">
        <p className="P">
          More than 1 year of experience creating amazing websites and web apps
          as freelancer and employee of great agencies and organizations, even
          the Dominican government.
        </p>
        <div className="skill">
          <h3 className="skill-title">Main Skills</h3>
          <hr />
          <table id="skills_list">
            <tbody>
              <tr>
                <td class="skill">HTML</td>
                <td class="progress">
                  <progress max="10" value="8"></progress>
                </td>
                <td class="progress_text">8/10</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="skill">CSS</td>
                <td class="progress">
                  <progress max="10" value="7"></progress>
                </td>
                <td class="progress_text">7/10</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="skill">JavaScript</td>
                <td class="progress">
                  <progress max="10" value="8"></progress>
                </td>
                <td class="progress_text">8/10</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="skill">Reactjs</td>
                <td class="progress">
                  <progress max="10" value="8"></progress>
                </td>
                <td class="progress_text">8/10</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="skill">Nodejs</td>
                <td class="progress">
                  <progress max="10" value="7"></progress>
                </td>
                <td class="progress_text">7/10</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="skill">MongoDB</td>
                <td class="progress">
                  <progress max="10" value="7"></progress>
                </td>
                <td class="progress_text">7/10</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="skill">Github</td>
                <td class="progress">
                  <progress max="10" value="7"></progress>
                </td>
                <td class="progress_text">7/10</td>
              </tr>
            </tbody>
          </table>

          <hr />
          <h3 className="skill-title">Work Experience</h3>
          <section><span className="experience">
              <h4>Crushium.com<span>(8 months)</span></h4>
              <p>Front-End Developer</p>
            </span>
            <span className="experience">
              <h4>Autoprint.io <span>(2 months)</span></h4>
              <p>WordPress Developer, Front-End Developer and Web Master</p>
            </span>
            <span className="experience">
              <h4>AlertaEmpresas.com<span>(2 weeks)</span></h4>
              <p>Front-End Developer and Web Master</p>
            </span>
          </section>
          <hr />
          <h3 className="skill-title">Licenses and certifications</h3>
          <section>
            <span className="experience">
              <h4>FrontEnd Web Developer
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.udemy.com/certificate/UC-ebf455c1-7c3d-4e32-ba29-d08dbfdc5073/" className="__a">View</a></button>
              </h4>
            </span>
            <span className="experience">
              <h4>React.js
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.udemy.com/certificate/UC-d2ab8659-72ed-4385-a6e9-cedae8d80453/" className="__a">View</a></button>
              </h4>
            </span>
            <span className="experience">
              <h4>React with TypeScript
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.udemy.com/certificate/UC-67b26175-5f40-459d-bb9e-e572a3031c5d/" className="__a">View</a></button>
              </h4>
            </span>
            <span className="experience">
              <h4>React with MongoDB
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.udemy.com/certificate/UC-2e4019b2-9fd4-4b80-99a1-3361b788f5b8/" className="__a">View</a></button>
              </h4>
            </span>
            <span className="experience">
              <h4>Node.js
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.udemy.com/certificate/UC-032d0407-eca2-4c9d-9428-84408d75cf13/" className="__a">View</a></button>
              </h4>
            </span>
            <span className="experience">
              <h4>HTML5
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.sololearn.com/Certificate/1014-21646390/pdf/" className="__a">View</a></button>
              </h4>
            </span>
            <span className="experience">
              <h4>JavaScript
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.sololearn.com/certificates/course/en/21646390/1024/landscape/pdf" className="__a">View</a></button>
              </h4>
            </span>
            <span className="experience">
              <h4>CSS3
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.sololearn.com/Certificate/1023-21646390/pdf/" className="__a">View</a></button>
              </h4>
            </span>
            <span className="experience">
              <h4>Github
              <button className="btn_a"><a target='_blank' rel='noreferrer' href="https://www.udemy.com/certificate/UC-75e94539-6269-4bd3-ae72-5a77b088da60/" className="__a">View</a></button>
              </h4>
            </span>
            
          </section>
        </div>
        <hr />
      </article>
      <div className="contactame">
        <h3 className="skill-title">Contact Me</h3>
        <nav className="nav-contactame">
          <a href="https://wa.me/+584126754878" target="_blank"><i style={{ cursor: 'pointer' }} class="fab fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/jisrael/" target="_blank"><i style={{ cursor: 'pointer' }} class="fab fa-linkedin-in"></i></a>
          <a href="mailto:jisraelarguelles@gmail.com" target="_blank"><i style={{ cursor: 'pointer' }} class="far fa-envelope"></i></a>
        </nav>
      </div>
    </div>

  );
}

export default App;
