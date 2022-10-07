import React from "react";
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// when a component is exported using a default export, import without {}
import About from "../index";

afterEach(cleanup);

// use the describe function to declare the component we're testing
describe('About component', () => {
    // renders About test
    // First test - baseline to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });
    // Second test
    it('matches snapshot DOM node structure', () => {
        // use asFragment function to return a snapshot of the About component
        const {asFragment} = render(<About />);

        // test and compare whether the expected and actual outcomes match
        // use 'expect' function with a matcher; use toMatchSnapshot matcher to asser that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    })
})