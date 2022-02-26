import Chart from "../Chart/Chart";
import chartSpec1 from "./chartspec1.json";
import chartSpec2 from "./chartspec2.json";
import chartSpec3 from "./chartspec3.json";

function App() {
    return (
        <div className="App">
            <header class="header" id="header"></header>

            <main class="main">
                <section class="home section" id="home">
                    <div class="c">
                        <div class="home__data">
                            <h1 class="home__title">Persuasion</h1>
                        </div>
                        <Chart spec={chartSpec1} width={500} chartTitle="Some chart" />
                        <Chart spec={chartSpec2} width={500} chartTitle="Some chart" />
                        <Chart spec={chartSpec3} width={500} chartTitle="Some chart" />
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
