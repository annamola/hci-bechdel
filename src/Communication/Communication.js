import Chart from "../Chart/Chart";
import chartSpec1 from "./chartspec1.json";

function App() {
    return (
        <div className="App">
            <header class="header" id="header"></header>

            <main class="main">
                <section class="home section" id="home">
                    <div class="c">
                        <div class="home__data">
                            <h1 class="home__title">Communication</h1>
                        </div>
                        <Chart spec={chartSpec1} width={500} chartTitle="Some chart" />
                        <Chart spec={chartSpec1} width={500} chartTitle="Some chart" />
                        <Chart spec={chartSpec1} width={500} chartTitle="Some chart" />
                    </div>
                </section>
            </main>
            <footer class="footer section"></footer>
        </div>
    );
}

export default App;
