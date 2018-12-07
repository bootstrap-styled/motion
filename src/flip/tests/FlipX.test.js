import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import FlipX from '../FlipX';
import theme from '../../theme';

const renderComponent = (EffectComponent = FlipX, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('FlipX', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render FlipX', () => {
    const renderedComponent = renderComponent(FlipX, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
