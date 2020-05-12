import {FunctionPoints, GraphData, RequestParams} from "../types";

export function getPointsViaApi(props: RequestParams) {
    // @ts-ignore
    const params = new URLSearchParams(props);
    return fetch(`http://localhost:8080/points?${params.toString()}`)
        .then(response => {console.log(response);response.json()})
        .catch(console.log)

}

export function transformAPIData(data: FunctionPoints):GraphData{
    const {x, y, name} = data;

    return {
        name,
        data: x.map((item, index) => {
            return {x: item, y: y[index]}
        })
    };
}

export function createDataset(functionPoints: GraphData) {
    return {
        label: functionPoints.name,
        fill: false,
        borderColor: getColor(),
        showLine: true,
        data: functionPoints.data
    }
}

export function getColor(){
    return '#' + Math.random().toString(16).substr(2,6);
}