/*
 Demo Animation Doc
 */

import _ from 'lodash';

/* eslint-disable arrow-body-style */
export const examplePanelAnimationWithTheme = ({ animation, settings = {} }) => {
  let props = '';
  if (Object.keys(settings).length) {
    props = 'const { theme } = this.props;\n';
  }

  return `import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { ${animation.name} } from '@bootstrap-styled/motion';

class Demo${animation.name} extends React.Component {
  ${props && `\n  static propTypes = {
    theme: PropTypes.object,
  }\n`}
  render() {
    ${props && `${props}    `}return (
      ${Object.keys(settings).length ?
    `<${animation.name}
${Object.keys(settings).length && Object.keys(settings).map((key) => `        ${_.camelCase(key.replace('$motion', ''))}={theme['${key}']['${settings[key]}']}`).join('\n')}
      >
      <Button>I am ${animation.name.toLowerCase()}-ing!</Button>
    </${animation.name}>` : `<${animation.name}>
        <Button>I am ${animation.name.toLowerCase()}-ing!</Button>
      </${animation.name}>`}
    );
  }
}

export default withTheme(Demo${animation.name});`;
};
