import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import SlideRightLeft from '../SlideRightLeft';
import theme from '../../theme';

const renderComponent = (EffectComponent = SlideRightLeft, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('SlideRightLeft', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render SlideRightLeft', () => {
    const renderedComponent = renderComponent(SlideRightLeft, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
