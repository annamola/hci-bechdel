import Chart from "../Chart/Chart";
import chartSpec1 from "./chartspec1.json";
import chartSpec2 from "./chartspec2.json";
import chartSpec3 from "./chartspec3.json";

function App() {
    return (
        <div className="App">
            <header className="header" id="header"></header>

            <main className="main">
                <section className="home section" id="home">
                    <div className="c">
                        <div className="home__data">
                            <h1 className="home__title">Persuasion</h1>
                        </div>
                        <Chart spec={chartSpec1} width={500} chartTitle="Some chart" />
                        <Chart spec={chartSpec2} width={500} chartTitle="Some chart" />
                        <Chart spec={chartSpec3} width={500} chartTitle="Some chart" />
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
