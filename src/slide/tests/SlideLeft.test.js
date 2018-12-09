import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import SlideLeft from '../SlideLeft';
import theme from '../../theme';

const renderComponent = (EffectComponent = SlideLeft, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('SlideLeft', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render SlideLeft', () => {
    const renderedComponent = renderComponent(SlideLeft, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
