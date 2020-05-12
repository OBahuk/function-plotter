import {GET_POINTS, SET_ERROR, SET_POINTS} from '../constants';

export interface RequestParams {
    x: number,
    y: number,
    step: number
}

export interface FunctionPoints {
    x: number[],
    y: number[],
    name: string
}

export interface Point {
    x: number,
    y: number
}

export interface GraphData {
    data: Point[]
    name: string
}

export interface SetPoints {
    type: typeof SET_POINTS
    payload: GraphData[]
}

export interface GetPoints {
    type: typeof GET_POINTS
    payload: RequestParams
}

export interface SetError {
    type: typeof SET_ERROR
    payload: boolean
}


export type ActionTypes = SetPoints | GetPoints | SetError;

export interface Store {
    isLoading: boolean,
    functions: FunctionPoints[],
    error: boolean
}

