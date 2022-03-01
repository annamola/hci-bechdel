import "./Persuasion.css";
import CastCrewChart from "../CastCrewChart/CastCrewChart";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

function Persuasion() {
    const data = require("../assets/data/nextBechdel_allTests.json");

    const passed_color = "#1b595c";
    const failed_color = "#ffa600";

    function handleColor(e) {
        if (e === 1) {
            //failed red
            return failed_color;
        } else {
            //passed green
            return passed_color;
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
        // console.log(e.movie);
    }
    return (
        <div className="App">
            <header className="header" id="header"></header>
            <div>
                <div>
                    <h1 className="title">Looking Beyond the Bechdel Test</h1>
                    <p className="para">
                        These days almost everyone knows about the Bechdel Test. It asks the two questions:
                    </p>

                    <ul className="para">
                        <li>Does the movie have at least two named female characters?</li>
                        <li>And do those characters have at least one conversation that is not about a man?</li>
                    </ul>
                    <p className="para">
                        It's shocking how many movies still do not pass this test. Every year representation improves on
                        screen yet there are many gaps in diversity and representation behind the camera. <br />
                        We're going to take a deep dive into the most popular movies of 2016 and whether they hold up to
                        the Bechdel test. We will also examine some lesser known tests that look at other aspects of
                        diversity and representation that can be overlooked when just using the Bechdel Test.
                    </p>
                    <div className="legend">
                        <div className="legend_section">
                            <div className="legend_box" style={{ backgroundColor: failed_color }} />
                            <p>Failed</p>
                        </div>
                        <div className="legend_section">
                            <div className="legend_box" style={{ backgroundColor: passed_color }} />
                            <p>Passed</p>
                        </div>
                    </div>
                </div>
                <div className="vis_container">
                    <p className="sub_title">Bechdel Test</p>
                    <p>
                        There are two named female characters<br></br>Do they have at least one conversation that is not
                        about a man?
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
                                    <rect fill={handleColor(movie.bechdel)} width={48} height={96}>
                                        {movie.bechdel}
                                    </rect>
                                </svg>
                            </LightTooltip>
                        ))}
                    </div>
                </div>
                <p style={{ marginBottom: "1rem" }} className="para">
                    <span style={{ fontWeight: "700" }}>64% </span>of movies passed the Bechdel Test.
                </p>
                <div className="progress_bar_container" style={{ backgroundColor: failed_color }}>
                    <div className="progress_bar" style={{ width: "64%", backgroundColor: passed_color }}></div>
                </div>
                <p style={{ marginBottom: "1rem", marginTop: "1rem" }} className="para">
                    But what about other tests that measure other areas of diversity? Let's take a look at the Uphold
                    Test, White Test, and Waithe Test.
                </p>
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
                                    <rect fill={handleColor(movie.uphold)} width={48} height={96}></rect>
                                </svg>
                            </LightTooltip>
                        ))}
                    </div>
                </div>
                <p style={{ marginBottom: "1rem" }} className="para">
                    <span style={{ fontWeight: "700" }}>0% </span>of movies passed the Uphold Test.
                </p>
                <div className="progress_bar_container" style={{ backgroundColor: failed_color }}>
                    <div className="progress_bar" style={{ width: "0%", backgroundColor: passed_color }}></div>
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
                                    <rect fill={handleColor(movie.white)} width={48} height={96}></rect>
                                </svg>
                            </LightTooltip>
                        ))}
                    </div>
                </div>
                <p style={{ marginBottom: "1rem" }} className="para">
                    <span style={{ fontWeight: "700" }}>0% </span>of movies passed the White Test.
                </p>
                <div className="progress_bar_container" style={{ backgroundColor: failed_color }}>
                    <div className="progress_bar" style={{ width: "0%", backgroundColor: passed_color }}></div>
                </div>
                <div className="vis_container">
                    <p className="sub_title">Waithe Test</p>
                    <p>
                        There's a black woman in the work<br></br>
                        Who's in a position of power<br></br>
                        And she's in a healthy relationship
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
                                    <rect fill={handleColor(movie.waithe)} width={48} height={96}></rect>
                                </svg>
                            </LightTooltip>
                        ))}
                    </div>
                </div>
                <p style={{ marginBottom: "1rem" }} className="para">
                    <span style={{ fontWeight: "700" }}>10% </span>of movies passed the Waithe Test.
                </p>
                <div className="progress_bar_container" style={{ backgroundColor: failed_color, marginBottom: "3rem" }}>
                    <div className="progress_bar" style={{ width: "10%", backgroundColor: passed_color }}></div>
                </div>
                <CastCrewChart></CastCrewChart>
            </div>
            <footer></footer>
        </div>
    );
}

export default Persuasion;
