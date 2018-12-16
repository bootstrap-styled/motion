import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

/**
 * @public
 * @name composeRotation
 * @descriptiton This is a HoC that will compose a rotation component
 * @param AbstractAnim {Component} - the react component that will inherit
 * @param variableName {string} - the name of the motion theme variable
 * @return {Component} - the new Rotation component
 */
export default function composeRotation(AbstractAnim, variableName) {
  const Rotation = function Rotation(props) {
    const { rotation, theme, ...rest } = props;

    let degree = rotation || theme.motion[variableName];
    if (!isNaN(rotation) || degree.indexOf('deg') === -1) { // eslint-disable-line no-restricted-globals
      degree = `${parseInt(degree, 10).toString()}deg`;
    }

    return (
      <AbstractAnim
        rotation={degree}
        {...rest}
      />
    );
  };

  /* eslint-disable react/require-default-props */
  Rotation.propTypes = {
    theme: PropTypes.object,
    rotation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };
  /* eslint-enable react/require-default-props */

  return withTheme(Rotation);
}
