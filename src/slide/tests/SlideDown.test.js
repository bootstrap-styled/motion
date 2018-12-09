import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import SlideDown from '../SlideDown';
import theme from '../../theme';

const renderComponent = (EffectComponent = SlideDown, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('SlideDown', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render SlideDown', () => {
    const renderedComponent = renderComponent(SlideDown, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
