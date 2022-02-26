import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header></header>
            <main className="main">
                <section className="home section" id="home">
                    <div className="c">
                        <div className="home__data">
                            <h1 className="home__title">Designing for Understanding</h1>
                        </div>
                        <div className="container">
                            <button>
                                <Link to="/communication">Communication</Link>
                            </button>
                            <button>
                                <Link to="/persuasion">Persuasion</Link>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer section">
                <p className="footer__copy">Team Members: Anna, Mohammad, Jenna, Kennedy</p>
            </footer>
        </div>
    );
}

export default App;
