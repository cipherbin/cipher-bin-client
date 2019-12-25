import React from 'react';
import PropTypes from 'prop-types';
import './NumberedList.css';

const NumberedList = ({ liContents }) => (
  <ol className="install-list">
    {liContents.map((content, i) => (
      <li className="install-list-item" key={i}>
        {content}
      </li>
    ))}
  </ol>
);

export default NumberedList;

NumberedList.propTypes = {
  liContents: PropTypes.arrayOf(PropTypes.node).isRequired,
};
