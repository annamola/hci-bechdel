import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import "react-dropdown/style.css";

function CastCrewChart(props) {
    const [movie, setMovie] = React.useState("Rogue One_(2016)");

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
    const data = require("../assets/data/nextBechdel_crewGender.json");

    function handleMovieSelection_data(e) {
        var newdata = data.filter((obj) => obj.MOVIE === movie);
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
        // console.log(newdata);
        return newdata;
    }
    useEffect(() => {
        handleMovieSelection_data(movie);

        return () => {
            handleMovieSelection_data(movie);
        };
    });

    const handleChange = (event) => {
        setMovie(event.target.value);
    };
    function handleColor(e) {
        if (e === "male") {
            return "#1b595c";
        } else {
            return "#ffa600";
        }
    }
    return (
        <div>
            <p className="para">
                The White test looks into the gender makeup of some of the movies. Here is a breakdown of every crew
                memeber credited by gender.
            </p>
            <label htmlFor="movies">Choose a movie: </label>
            <select name="movies" id="movies" onChange={handleChange}>
                <option value="Deadpool_(2016)">Deadpool</option>
                <option value="The Secret Life of Pets_(2016)">The Secret Life of Pets</option>
                <option value="Captain America: Civil War_(2016)">Captain America: Civil War</option>
                <option value="Rogue One_(2016)">Rogue One</option>
            </select>
            <div className="vis">
                {handleMovieSelection_data(movie).map((movie, i) => (
                    <LightTooltip key={movie.MOVIE + movie.FULL_NAME + i} placement="bottom" title={movie.FULL_NAME}>
                        <svg style={{ width: "10px", height: "10px", margin: "1px" }} viewBox="0 0 10 10">
                            <rect width={10} height={10} fill={handleColor(movie.GENDER_GUESS)}></rect>
                        </svg>
                    </LightTooltip>
                ))}
            </div>
        </div>
    );
}

export default CastCrewChart;
