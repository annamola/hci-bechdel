import "./Persuasion.css";
import Chart from "../Chart/Chart";
import chartSpec2 from "./chartspec2.json";
import chartSpec3 from "./chartspec3.json";

function Persuasion() {
    const data = require("../assets/data/nextBechdel_allTests.json");
    function handleColor(e) {
        if (e === 1) {
            return "red";
        } else {
            return "green";
        }
    }
    function handleMouseOver(e) {
        console.log(e.movie);
    }
    return (
        <div className="App">
            <header className="header" id="header"></header>

            <main className="main">
                <section className="home section" id="home">
                    <div className="c">
                        <div className="home__data">
                            <h1 className="home__title">Why </h1>
                        </div>
                        <div className="d3vis_container">
                            <p>Bechdel Test</p>
                            <div className="d3vis">
                                {data.map((movie) => (
                                    <svg
                                        style={{ width: "48px", height: "96px" }}
                                        viewBox="0 0 48 96"
                                        key={movie.movie}
                                        onMouseOver={() => handleMouseOver(movie)}
                                    >
                                        <rect fill={handleColor(movie.bechdel)} width={48} height={96}>
                                            {movie.bechdel}
                                        </rect>
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="d3vis_container">
                            <p>Uphold Test</p>
                            <div className="d3vis">
                                {data.map((movie) => (
                                    <svg
                                        style={{ width: "48px", height: "96px" }}
                                        viewBox="0 0 48 96"
                                        key={movie.movie}
                                        onMouseOver={() => handleMouseOver(movie)}
                                    >
                                        <rect fill={handleColor(movie.uphold)} width={48} height={96}></rect>
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="d3vis_container">
                            <p>White Test</p>
                            <div className="d3vis">
                                {data.map((movie) => (
                                    <svg
                                        style={{ width: "48px", height: "96px" }}
                                        viewBox="0 0 48 96"
                                        key={movie.movie}
                                        onMouseOver={() => handleMouseOver(movie)}
                                    >
                                        <rect fill={handleColor(movie.white)} width={48} height={96}></rect>
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <Chart spec={chartSpec2} width={500} chartTitle="Some chart" />
                        <Chart spec={chartSpec3} width={500} chartTitle="Some chart" />
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default Persuasion;
