import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/theme';

export default (props) => <ThemeProvider theme={theme} {...props} />;
