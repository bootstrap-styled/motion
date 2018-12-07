import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';


/**
 * @public
 * @name composeAmplification
 * @descriptiton This is a HoC that will compose a amplification component
 * @param AbstractAnim {Component} - the react component that will inherit
 * @param variableName {string} - the name of the motion theme variable
 * @return {Component} - the new Amplification component
 */
export default function composeAmplification(AbstractAnim, variableName) {
  const Amplification = function Amplification(props) {
    const { amplification, theme, ...rest } = props;

    return (
      <AbstractAnim
        amplification={amplification || theme.motion[variableName]}
        {...rest}
      />
    );
  };

  /* eslint-disable react/require-default-props */
  Amplification.propTypes = {
    theme: PropTypes.object,
    amplification: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  };
  /* eslint-enable react/require-default-props */

  return withTheme(Amplification);
}
