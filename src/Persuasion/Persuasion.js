import "./Persuasion.css";
import Chart from "../Chart/Chart";
import chartSpec2 from "./chartspec2.json";
import chartSpec3 from "./chartspec3.json";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

function Persuasion() {
    const data = require("../assets/data/nextBechdel_allTests.json");
    function handleColor(e) {
        if (e === 1) {
            //failed red
            return "red";
        } else {
            //passed green
            return "green";
        }
    }
    const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: "white",
                color: "rgba(0, 0, 0, 0.87)",
                boxShadow: theme.shadows[1],
                fontSize: 11,
            },
        })
    );

    function handleMouseOver(e) {
        console.log(e.movie);
    }
    return (
        <div className="App">
            <header className="header" id="header"></header>
            <div>
                <div>
                    <h1 className="title">Looking Beyond the Bechdel Test</h1>
                    <div className="legend">
                        <div className="legend_section">
                            <div className="legend_box" style={{ backgroundColor: "red" }} />
                            <p>Failed</p>
                        </div>
                        <div className="legend_section">
                            <div className="legend_box" style={{ backgroundColor: "green" }} />
                            <p>Passed</p>
                        </div>
                    </div>
                </div>
                <div className="vis_container">
                    <p className="sub_title">Bechdel Test</p>
                    <p>
                        Does it have at least two named female characters?<br></br>
                        And do those characters have at least one conversation that is not about a man?
                    </p>
                    <div className="vis">
                        {data.map((movie) => (
                            <LightTooltip key={movie.movie} placement="bottom" title={movie.movie}>
                                <svg
                                    style={{ width: "48px", height: "96px" }}
                                    viewBox="0 0 48 96"
                                    key={movie.movie}
                                    onMouseOver={() => handleMouseOver(movie)}
                                >
                                    <rect
                                        stroke={"black"}
                                        strokeWidth={2}
                                        fill={handleColor(movie.bechdel)}
                                        width={48}
                                        height={96}
                                    >
                                        {movie.bechdel}
                                    </rect>
                                </svg>
                            </LightTooltip>
                        ))}
                    </div>
                </div>
                <div className="progress_bar_container" style={{ backgroundColor: "red" }}>
                    <div className="progress_bar" style={{ width: "64%", backgroundColor: "green" }}></div>
                </div>
                <div className="vis_container">
                    <p className="sub_title">Uphold Test</p>
                    <p>The on-set crew is 50 percent women</p>
                    <div className="vis">
                        {data.map((movie) => (
                            <LightTooltip key={movie.movie} placement="bottom" title={movie.movie}>
                                <svg
                                    style={{ width: "48px", height: "96px" }}
                                    viewBox="0 0 48 96"
                                    key={movie.movie}
                                    onMouseOver={() => handleMouseOver(movie)}
                                >
                                    <rect
                                        stroke={"black"}
                                        strokeWidth={2}
                                        fill={handleColor(movie.uphold)}
                                        width={48}
                                        height={96}
                                    ></rect>
                                </svg>
                            </LightTooltip>
                        ))}
                    </div>
                </div>
                <div className="vis_container">
                    <p className="sub_title">White Test</p>
                    <p>
                        Half of the department heads are women<br></br>
                        Half the members of each department are women<br></br>
                        And half the crew members are women
                    </p>
                    <div className="vis">
                        {data.map((movie) => (
                            <LightTooltip key={movie.movie} placement="bottom" title={movie.movie}>
                                <svg
                                    style={{ width: "48px", height: "96px" }}
                                    viewBox="0 0 48 96"
                                    key={movie.movie}
                                    onMouseOver={() => handleMouseOver(movie)}
                                >
                                    <rect
                                        stroke={"black"}
                                        strokeWidth={2}
                                        fill={handleColor(movie.white)}
                                        width={48}
                                        height={96}
                                    ></rect>
                                </svg>
                            </LightTooltip>
                        ))}
                    </div>
                </div>
                <Chart spec={chartSpec2} width={500} chartTitle="Some chart" />
                <Chart spec={chartSpec3} width={500} chartTitle="Some chart" />
            </div>
            <footer></footer>
        </div>
    );
}

export default Persuasion;
