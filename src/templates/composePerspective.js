import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';


/**
 * @public
 * @name composePerspective
 * @descriptiton This is a HoC that will compose a perspective component
 * @param AbstractAnim {Component} - the react component that will inherit
 * @param variableName {string} - the name of the motion theme variable
 * @return {Component} - the new Perspective component
 */
export default function composePerspective(AbstractAnim, variableName) {
  const Perspective = function Perspective(props) {
    const { perspective, theme, ...rest } = props;

    return (
      <AbstractAnim
        perspective={perspective || theme.motion[variableName]}
        {...rest}
      />
    );
  };

  /* eslint-disable react/require-default-props */
  Perspective.propTypes = {
    theme: PropTypes.object,
    perspective: PropTypes.string,
  };
  /* eslint-enable react/require-default-props */

  return withTheme(Perspective);
}
