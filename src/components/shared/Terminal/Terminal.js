import React from 'react';
import PropTypes from 'prop-types';
import TerminalIcon from '../Icons/Terminal/Terminal';
import './Terminal.css';

const errMsg = "ERROR: in <Terminal /> component. Please provide the 'text' property on every 'command' passed into the 'commands' prop";

const Terminal = ({ commands, paneName }) => (
  <div className="terminal-wrapper">
    <div className="terminal-header">
      <div className="terminal-svg-wrapper">
        <TerminalIcon />
      </div>
      {paneName && paneName}
    </div>
    <pre className="terminal-content">
      {commands.map((cmd, i) => {
        const error = cmd.text === '' || cmd.text === undefined;
        return (
          <span key={i} style={{ color: error ? '#DB3445' : (cmd.color || '#F5FBFF') }}>
            {cmd.promptSymbol && cmd.promptSymbol !== '' && (
              <span
                className="unselectable"
                style={{ color: error ? '#DB3445' : (cmd.color || '#F5FBFF') }}
              >
                {cmd.promptSymbol}
              </span>
            )}
            {`${error ? errMsg : cmd.text}\n`}
          </span>
        );
      })}
    </pre>
  </div>
);

export default Terminal;

Terminal.propTypes = {
  commands: PropTypes.arrayOf(PropTypes.shape({
    promptSymbol: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
  })),
  paneName: PropTypes.string,
};

Terminal.defaultProps = {
  commands: ['please add at least one command'],
  paneName: '',
};
