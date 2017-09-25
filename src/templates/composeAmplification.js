import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

export default function composeAmplification(AbstractAnim, variableName) {
  const Amplification = function Amplification(props) {
    const { amplification, theme, ...rest } = props;

    return (
      <AbstractAnim
        amplification={amplification || theme[variableName]}
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
