import "./App.css";

function App() {
    return (
        <div className="App">
            <header class="header" id="header"></header>

            <main class="main">
                <section class="home section" id="home">
                    <div class="c">
                        <div class="home__data">
                            <h1 class="home__title">Designing for Understanding</h1>
                        </div>
                        <div class="container">
                            <button>Communication</button>
                            <button>Persuasion</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer class="footer section">
                <p class="footer__copy">Team Members: Anna, Mohammad, Jenna, Kennedy</p>
            </footer>
        </div>
    );
}

export default App;
