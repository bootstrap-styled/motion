import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

/**
 * @public
 * @name composeDistance
 * @descriptiton This is a HoC that will compose a distance component
 * @param AbstractAnim {Component} - the react component that will inherit
 * @param variableName {string} - the name of the motion theme variable
 * @return {Component} - the new Distance component
 */
export default function composeDistance(AbstractAnim, variableName) {
  const Distance = function Distance(props) {
    const { distance, theme, ...rest } = props;

    return (
      <AbstractAnim
        distance={distance || theme.motion[variableName]}
        {...rest}
      />
    );
  };

  /* eslint-disable react/require-default-props */
  Distance.propTypes = {
    theme: PropTypes.object,
    distance: PropTypes.string,
  };
  /* eslint-enable react/require-default-props */

  return withTheme(Distance);
}
