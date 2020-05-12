import * as React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';

import { getPoints } from '../redux/actions';
import { ActionTypes } from '../types'

interface Props {
    dispatch: ( arg: ActionTypes) => void
}

export function Inputs({dispatch}: Props) {
    const defaultValues = {x: '', y: '', step: '', error: false};
    const [values, setValues] = React.useState(defaultValues);
    const form = React.useRef(null);
    const { x, y, step, error } = values;

    const submitHandler = () => {
        if(!form || !form.current){ return; }
        // @ts-ignore
        const {x, y, step} = form.current.elements;

        if(x.value === '' || y.value === '' || step.value === ''){
            return setValues({...values, error: true});
        }

        const formData = {
            x: Number(x.value),
            y: Number(y.value),
            step: Number(step.value)
        };

        dispatch(getPoints(formData));
        return setValues({...values, error: false});
    };


    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        const newValues = {...values};
        // @ts-ignore
        newValues[name] = value;
        setValues(newValues)
    };

    return (
        <Box>
            <form ref={form}>
                <FormControl>
                    <InputLabel>X</InputLabel>
                    <Input
                        type="number"
                        name="x"
                        placeholder="x"
                        defaultValue={x}
                        onChange={changeHandler}
                        error={error && x === ''}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Y</InputLabel>
                    <Input
                        type="number"
                        name="y"
                        placeholder="y"
                        defaultValue={y}
                        onChange={changeHandler}
                        error={error && y === ''}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>STEP</InputLabel>
                    <Input
                        type="number"
                        name="step"
                        placeholder="step"
                        defaultValue={step}
                        onChange={changeHandler}
                        error={error && step === ''}
                        inputProps={{
                            step: 0.1,
                            min: 0.1,
                        }}
                    />
                </FormControl>
                <Button variant="contained" color="primary" onClick={submitHandler} >
                    DRAW GRAPH
                </Button>
                { error ? <div className="error">ALL FIELDS ARE REQUIRED</div> : null }
            </form>
        </Box>
    );
}