import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import CachedIcon from '@material-ui/icons/Cached';

import { Inputs } from './Inputs';
import { Graph } from './Graph';

import { Store } from '../types'

export const AppContainer = () => {
    const { isLoading, functions, error } = useSelector((state:Store) => state);
    const graphCanBeRendered = error || isLoading || !functions.length;

    return (
        <Container className="App" >
            <h1>Function Graphs Builder</h1>
            <Inputs dispatch={useDispatch()}/>
            { error ? <div className="error">Something went wrong, maybe server is unreachable</div> : null }
            { isLoading ? <CachedIcon color="primary" style={{ fontSize: 40 }}/> : null }
            { graphCanBeRendered ? null : <Graph functions={functions}/>  }
        </Container>
    );
};
