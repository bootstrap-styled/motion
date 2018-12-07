import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RotateUpRight from '../RotateUpRight';
import theme from '../../theme';

const renderComponent = (EffectComponent = RotateUpRight, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('RotateUpRight', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render RotateUpRight', () => {
    const renderedComponent = renderComponent(RotateUpRight, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
