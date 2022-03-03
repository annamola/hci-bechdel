import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

function CastCrewChart(props) {
    const [crewMovie, setCrewMovie] = React.useState("Rogue One_(2016)");
    const [castMovie, setCastMovie] = React.useState("Rogue One: A Star Wars Story");

    const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: "#f5f5f9",
                color: "rgba(0, 0, 0, 0.99)",
                maxWidth: 220,
                fontSize: theme.typography.pxToRem(12),
                border: "1px solid #dadde9",
            },
        })
    );

    const crew_data = require("../assets/data/nextBechdel_crewGender.json");
    const cast_data = require("../assets/data/nextBechdel_castGender.json");

    function handleMovieSelection_crew_data(e) {
        var newdata = crew_data.filter((obj) => obj.MOVIE === crewMovie);
        newdata = newdata.filter((obj) => obj.GENDER_GUESS === "male" || obj.GENDER_GUESS === "female");
        newdata = newdata.sort(function (a, b) {
            let x = a.GENDER_GUESS.toLowerCase();
            let y = b.GENDER_GUESS.toLowerCase();
            if (x < y) {
                return 1;
            }
            if (x > y) {
                return -1;
            }
            return 0;
        });
        return newdata;
    }
    const percent_crew = percent_calc().toPrecision(3) + "%";
    const percent_cast = percent_calc_cast().toPrecision(3) + "%";
    function percent_calc() {
        const newdata = handleMovieSelection_crew_data(crew_data);
        var num_total = newdata.length;
        var num_female = newdata.filter((obj) => obj.GENDER_GUESS === "female").length;
        return (num_female / num_total) * 100;
    }
    function percent_calc_cast() {
        const newdata = handleMovieSelection_cast_data(crew_data);
        var num_total = newdata.length;
        var num_female = newdata.filter((obj) => obj.GENDER === "Female").length;
        return (num_female / num_total) * 100;
    }
    function handleMovieSelection_cast_data(e) {
        var newdata = cast_data.filter((obj) => obj.MOVIE === castMovie);
        newdata = newdata.filter((obj) => obj.GENDER === "Male" || obj.GENDER === "Female");
        newdata = newdata.sort(function (a, b) {
            let x = a.GENDER.toLowerCase();
            let y = b.GENDER.toLowerCase();
            if (x < y) {
                return 1;
            }
            if (x > y) {
                return -1;
            }
            return 0;
        });
        return newdata;
    }
    useEffect(() => {
        let abortController = new AbortController();

        handleMovieSelection_crew_data(crewMovie);
        handleMovieSelection_cast_data(castMovie);

        return () => {
            abortController.abort();
        };
    });

    const handleCrewChange = (event) => {
        setCrewMovie(event.target.value);
    };
    const handleCastChange = (event) => {
        setCastMovie(event.target.value);
    };
    function handleColor(e) {
        if (e === "male" || e === "Male") {
            return "#1b595c";
        } else if (e === "female" || e === "Female") {
            return "#ffa600";
        } else {
            return "black";
        }
    }
    return (
        <div>
            <p className="para">
                The White test looks into the gender makeup of some of the movies. Let's look closer at the data. Here
                is a breakdown of every crew member ordered by gender. Each square represents a member of the crew that
                worked on the selected movie.
            </p>
            <div className="legend">
                <div className="legend_section">
                    <div className="legend_box" style={{ backgroundColor: "#ffa600" }} />
                    <p>Female</p>
                </div>
                <div className="legend_section">
                    <div className="legend_box" style={{ backgroundColor: "#1b595c" }} />
                    <p>Male</p>
                </div>
            </div>
            <div className="select_movie">
                <label htmlFor="crew_movies">Choose a movie: </label>
                <select name="crew_movies" id="crew_movies" onChange={handleCrewChange}>
                    <option value="Rogue One_(2016)">Rogue One</option>
                    <option value="Deadpool_(2016)">Deadpool</option>
                    <option value="The Secret Life of Pets_(2016)">The Secret Life of Pets</option>
                    <option value="Captain America: Civil War_(2016)">Captain America: Civil War</option>
                </select>
            </div>
            <div className="vis">
                {handleMovieSelection_crew_data(crewMovie).map((movie, i) => (
                    <LightTooltip
                        key={movie.MOVIE + movie.FULL_NAME + i}
                        placement="bottom"
                        title={
                            <div>
                                <p>{movie.FULL_NAME}</p>
                                <p>{movie.GENDER_GUESS.charAt(0).toUpperCase() + movie.GENDER_GUESS.slice(1)}</p>
                                <p>
                                    {movie.DEPARTMENT.includes("by_", 12)
                                        ? movie.DEPARTMENT.slice(0, -3)
                                        : movie.DEPARTMENT.slice(0, -1)}
                                </p>
                            </div>
                        }
                    >
                        <svg style={{ width: "10px", height: "10px", margin: "1px" }} viewBox="0 0 10 10">
                            <rect width={10} height={10} fill={handleColor(movie.GENDER_GUESS)}></rect>
                        </svg>
                    </LightTooltip>
                ))}
            </div>
            <p style={{ marginBottom: "1rem" }} className="para">
                <span style={{ fontWeight: "700" }}>{percent_crew}</span> of the crew is female.
            </p>
            <div className="progress_bar_container" style={{ backgroundColor: "#1b595c" }}>
                <div className="progress_bar" style={{ width: percent_crew, backgroundColor: "#ffa600" }}></div>
            </div>
            <p className="para">
                The White test looks into the gender makeup of some of the movies. Here is a breakdown of every crew
                member credited by gender.
            </p>
            <div className="select_movie">
                <label htmlFor="cast_movies">Choose a movie: </label>
                <select name="cast_movies" id="cast_movies" onChange={handleCastChange}>
                    <option value="Rogue One: A Star Wars Story">Rogue One</option>
                    <option value="Deadpool">Deadpool</option>
                    <option value="The Secret Life of Pets">The Secret Life of Pets</option>
                    <option value="Captain America: Civil War">Captain America: Civil War</option>
                </select>
            </div>
            <div className="vis">
                {handleMovieSelection_cast_data(castMovie).map((movie, i) => (
                    <LightTooltip
                        key={movie.MOVIE + movie.CHARACTER_NAME + i}
                        placement="bottom"
                        title={
                            <React.Fragment>
                                <p>{movie.ACTOR}</p>
                                <p>{movie.GENDER}</p>
                                <p>{movie.TYPE}</p>
                            </React.Fragment>
                        }
                    >
                        <svg style={{ width: "30px", height: "30px", margin: "1px" }} viewBox="0 0 30 30">
                            <rect width={30} height={30} fill={handleColor(movie.GENDER)}></rect>
                        </svg>
                    </LightTooltip>
                ))}
            </div>
            <p style={{ marginBottom: "1rem" }} className="para">
                <span style={{ fontWeight: "700" }}>{percent_cast}</span> of the cast is female.
            </p>
            <div className="progress_bar_container" style={{ backgroundColor: "#1b595c", marginBottom: "10rem" }}>
                <div className="progress_bar" style={{ width: percent_cast, backgroundColor: "#ffa600" }}></div>
            </div>
        </div>
    );
}

export default CastCrewChart;
