import Chart from "../Chart/Chart";
import chartSpec1 from "./chartspec1.json";

function Communication() {
    return (
        <div className="App">
            <header className="header" id="header"></header>

            <main className="main">
                <section className="home section" id="home">
                    <div className="c">
                        <div className="home__data">
                            <h1 className="home__title">Communication</h1>
                        </div>
                        <div className="legend">
                            <div className="legend_section">
                                <div className="legend_box" style={{ backgroundColor: "blue" }} />
                                <p>Failed</p>
                            </div>
                            <div className="legend_section">
                                <div className="legend_box" style={{ backgroundColor: "purple" }} />
                                <p>Passed</p>
                            </div>
                        </div>
                        <Chart spec={chartSpec1} width={500} chartTitle="Some chart" />

                        <Chart spec={chartSpec1} width={500} chartTitle="Some chart" />
                        <Chart spec={chartSpec1} width={500} chartTitle="Some chart" />
                    </div>
                </section>
            </main>
            <footer className="footer section"></footer>
        </div>
    );
}

export default Communication;
