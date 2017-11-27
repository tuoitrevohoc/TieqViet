import React from 'react';
import { render } from 'react-dom';
import { TieqViet } from './TieqViet'

const styles = {
  width: "600px",
  margin: "0 auto",
};

const App = () => (
  <div className="container" style={styles}>
    <TieqViet />
  </div>
);

render(<App />, document.getElementById('root'));
