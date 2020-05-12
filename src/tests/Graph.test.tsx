import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import { Graph } from '../components/Graph';

test('renders chart', () => {
    render(<Graph functions={[]} />);

    const chartContainer = document.querySelector('.chart');
    expect(chartContainer).toBeInTheDocument();

    const canvas = chartContainer.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
});

