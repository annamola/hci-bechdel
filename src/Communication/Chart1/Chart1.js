import React, { Component } from "react";
import { Vega } from "react-vega";
import { Handler } from "vega-tooltip";

export default class Chart extends Component {
    render() {
        let { spec, data, chartTitle, width } = this.props;

        return (
            <div>
                <h3>{chartTitle}</h3>
                <Vega spec={spec} data={data} width={width} tooltip={new Handler().call} />
            </div>
        );
    }
}
