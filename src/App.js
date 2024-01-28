import "./App.css";
import React, { Component } from "react";
// syntax de declaration vue sur https://www.w3schools.com/react/react_state.asp

// ? la fonction APP transformer en composant de classe
class App extends React.Component {
  // ? les informations sur la personne
  constructor(props) {
    super(props);
    this.state = {
      Persone: {
        nomComplet: " Fabbrice Jordan Ramos",
        biographie: "Develloppeur fullstack WEB &  front-end developer mobile",
        ville: "Dakar",
        imgSrc:
          "https://pbs.twimg.com/media/E3N1PsOWUAQTJoV?format=jpg&name=large",
        profession: "Developpeur fullStack OVERFLOW",
      },
      show: false, // on le met a false par defaut pour cacher les informations
      time: 0, //le temps ecoulé que l'on initialise a zero
    };
  }

  showProfile = () => {
    this.setState({ show: true , time:0});//si il ya un changement d'etat de time le compteur est réinitialisé
    if (this.state.show) {
      console.log("hello show is true"); //pour tester si le changement fonctione
    }
  };
  hideProfile = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    //?mot clé pour le montage des composant ( normalement il demarre des que le composant App est monté vu que c'est le seul)
    this.interval = setInterval(this.updateTime, 1000);
  }
  componentWillUnmount() { //? mot clé pour le demontage des composant ( il fonctionnera que si le composant App est démonté mais cést le seul)
    clearInterval(this.interval);
  }
  updateTime = () => {
    // ? la fonction compteur
    this.setState((previousState) => ({
      time: previousState.time + 1,
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          {
            //! meme chose que ligne 48 sauf qu'on evalue si !{vrai} = faux alors on affiche le button or ! = non => non{vrai}=faux
            !this.state.show && (
              <a className="button" href="#" onClick={this.showProfile}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Show profile
              </a>
            )
          }

          {
            //  ? cet partie sera afficher que si show=true   si show = false la deuxieme partie de l'expression n'est pas evalué
            this.state.show && (
              // template html profile card css/html lien dans le fichier App.css
              <div>
                <p>
                  Temps écoulé depuis le montage : {this.state.time} secondes
                </p>

                <div class="card-container">
                  <span class="pro">IT engineer</span>
                  <img
                    class="round"
                    src={this.state.Persone.imgSrc}
                    alt="user"
                  />
                  <h3>{this.state.Persone.nomComplet}</h3>
                  <h6>{this.state.Persone.ville}</h6>
                  <p>{this.state.Persone.profession}</p>
                  <p>
                    <small>{this.state.Persone.biographie}</small>
                  </p>
                  <div class="buttons">
                    <button class="primary" onClick={this.hideProfile}>
                      Hide profile
                    </button>
                    <button class="primary ghost">
                      <a
                        href="https://github.com/Fabricejor"
                        style={{ color: "#02899C", textDecoration: "none" }}
                      >
                        Following
                      </a>
                    </button>
                  </div>
                  <div class="skills">
                    <h6>Skills</h6>
                    <ul>
                      <li>FLUTTER</li>
                      <li>FullSTACK DEVELLOPPEMENT</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>PHP</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Node</li>
                      <li>git</li>
                      <li>github</li>
                      <li>xampp</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
export default App;
