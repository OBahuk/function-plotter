import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import {act} from "react-dom/test-utils";

it("should render app container", () => {
  act(() => {
    render(<App />);
  });

  const app = document.querySelector(".App");
  expect(app).not.toBe(null);
});