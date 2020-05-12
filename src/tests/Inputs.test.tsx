import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import { Inputs } from '../components/Inputs';

it("should render form", () => {
    act(() => {
        render(<Inputs dispatch={()=>{}}/>);
    });

    const form = document.querySelector("form");
    expect(form).not.toBe(null);

    const button = form.querySelector('button');
    expect(button).not.toBe(null);

    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    const error = form.querySelector('.error');
    expect(error).not.toBe(null);
});

it("should show error on empty form submit", () => {
    act(() => {
        render(<Inputs dispatch={()=>{}}/>);
    });

    const form = document.querySelector("form");
    const button = form.querySelector('button');

    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    const error = form.querySelector('.error');
    expect(error).not.toBe(null);
});

it("should not show error on valid form submit", () => {
    act(() => {
        render(<Inputs dispatch={()=>{}}/>);
    });

    const form = document.querySelector("form");
    const button = form.querySelector('button');
    form.elements['x'].value = 1;
    form.elements['y'].value = 1;
    form.elements['step'].value = 1;

    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    const error = form.querySelector('.error');
    expect(error).toBe(null);
});

