import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

export default function composeDistance(AbstractAnim, variableName) {
  const Distance = function Distance(props) {
    const { distance, theme, ...rest } = props;

    return (
      <AbstractAnim
        distance={distance || theme[variableName]}
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
