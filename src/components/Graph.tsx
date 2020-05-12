import React from "react";
import { Scatter } from "react-chartjs-2";
import Box from '@material-ui/core/Box';

import { GraphData } from '../types';
import { createDataset } from '../utils'

// @ts-ignore
export function Graph({ functions }) {
    const data = {
        lineTension: 1,
        borderWidth: 1,
        pointRadius: 2,
        intepolation: true,
        datasets: functions.map((item: GraphData) => createDataset(item))
    };

    var options = {
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        },
        scales: {
            xAxes: [
                {
                    ticks: { display: true }
                }
            ]
        }
    };

    return (
        <Box className="chart">
            <Scatter data={data} options={options}/>
        </Box>
    );
}
