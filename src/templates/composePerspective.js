import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

export default function composePerspective(AbstractAnim, variableName) {
  const Perspective = function Perspective(props) {
    const { perspective, theme, ...rest } = props;

    return (
      <AbstractAnim
        perspective={perspective || theme[variableName]}
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
