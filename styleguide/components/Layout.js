import React from 'react';
import Layout from '@bootstrap-styled/documentation/lib/Layout/LayoutRenderer';
import { homepage } from '../../package.json';
import theme from '../theme';
export default ({ ...props }) => <Layout {...props} theme={theme} logoMenu={{ href: homepage }}/>;
