import React from 'react';
import PropTypes from 'prop-types';
import TerminalIcon from '../Icons/Terminal/Terminal';
import './Terminal.css';

const Terminal = ({ commands }) => (
  <div className="terminal-wrapper">
    <div className="terminal-header">
      <div className="terminal-svg-wrapper">
        <TerminalIcon />
      </div>
      Terminal
    </div>
    <pre className="terminal-content">
      {commands.map((cmd, i) => (
        <span key={i}>
          <span className="unselectable">
            $
          </span>
          {`${cmd}\n`}
        </span>
      ))}
    </pre>
  </div>
);

export default Terminal;

Terminal.propTypes = {
  commands: PropTypes.arrayOf(PropTypes.string),
};

Terminal.defaultProps = {
  commands: ['please add at least one command'],
};
