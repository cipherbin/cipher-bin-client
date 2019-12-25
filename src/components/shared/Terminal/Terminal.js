import React from 'react';
import PropTypes from 'prop-types';
import TerminalIcon from '../Icons/Terminal/Terminal';
import './Terminal.css';

const Terminal = ({ commands, promptSymbol, paneName }) => (
  <div className="terminal-wrapper">
    <div className="terminal-header">
      <div className="terminal-svg-wrapper">
        <TerminalIcon />
      </div>
      {paneName && paneName}
    </div>
    <pre className="terminal-content">
      {commands.map((cmd, i) => (
        <span key={i}>
          {promptSymbol !== '' && (
            <span className="unselectable">
              {promptSymbol}
            </span>
          )}
          {`${cmd}\n`}
        </span>
      ))}
    </pre>
  </div>
);

export default Terminal;

Terminal.propTypes = {
  commands: PropTypes.arrayOf(PropTypes.string),
  promptSymbol: PropTypes.string,
  paneName: PropTypes.string,
};

Terminal.defaultProps = {
  commands: ['please add at least one command'],
  promptSymbol: '',
  paneName: '',
};
