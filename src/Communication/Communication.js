import Chart from "../Chart/Chart";
import chartSpec1 from "./chartspec1.json";
import chartSpec2 from "./chartspec2.json";
import sing_cast from "./sing_cast.json";
import crew from "./crew.json";

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
                        <p>
                            "The Bechdel test was created in 1985 as a metric to determine the portrayal of women in
                            film. To pass the Bechdel test, a film must have two named female characters who have at
                            least one conversation that is not primarily about a man. As the movie industry becomes
                            increasingly more representative, tests with more specific criteria have been created. These
                            tests can generally be categorized into four categories: “protagonist”, that analyzes
                            presence of stereotypes in female protagonists; “supporting cast”, that looks at the gender
                            distribution of smaller roles; “intersectionality”, that examines the amount of non-white
                            women in film; and “crew”, that looks at the number of women behind the camera".
                        </p>
                        <div className="legend">
                            <div className="legend_section">
                                <div className="legend_box" style={{ backgroundColor: "#5ec962" }} />
                                <p>Male Cast Members</p>
                            </div>
                            <div className="legend_section">
                                <div className="legend_box" style={{ backgroundColor: "#440154" }} />
                                <p>Female Cast Members</p>
                            </div>
                        </div>
                        <Chart
                            spec={chartSpec1}
                            width={700}
                            chartTitle="Gender Distribution of Cast for 50 Top-Grossing Movies from 2016"
                        />
                        <Chart spec={chartSpec2} width={700} chartTitle="How Many Movies Passed Each Test" />
                        <Chart
                            spec={sing_cast}
                            width={700}
                            chartTitle="Gender Distribution of Cast in Finding Dory (2016)"
                        />
                        <Chart
                            spec={crew}
                            width={700}
                            chartTitle="Gender Distribution of Crew in Finding Dory (2016)"
                        />
                    </div>
                </section>
            </main>
            <footer className="footer section"></footer>
        </div>
    );
}

export default Communication;
