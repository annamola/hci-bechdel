import Chart1 from "./Chart1/Chart1";
import chartSpec from "./Chart1/chartspec.json";

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
                        <Chart1 spec={chartSpec} width={500} chartTitle="Some chart" />
                        <Chart1 spec={chartSpec} width={500} chartTitle="Some chart" />
                        <Chart1 spec={chartSpec} width={500} chartTitle="Some chart" />
                    </div>
                </section>
            </main>
            <footer class="footer section"></footer>
        </div>
    );
}

export default App;
