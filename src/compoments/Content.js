import React from 'react';
import PropTypes from 'prop-types';

/**
 * Start of Content
 */
const Content = props => <main>{props.children}</main>;

/**
 * Proptypes control via prop-types library.
 */
Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
