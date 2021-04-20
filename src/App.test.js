import React from "react";
import ReactDOM from 'react-dom';
import MaineApp from "./App";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MaineApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
