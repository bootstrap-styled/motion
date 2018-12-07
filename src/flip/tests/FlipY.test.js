import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import FlipY from '../FlipY';
import theme from '../../theme';

const renderComponent = (EffectComponent = FlipY, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('FlipY', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render FlipY', () => {
    const renderedComponent = renderComponent(FlipY, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
