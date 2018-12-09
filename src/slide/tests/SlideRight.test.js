import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import SlideRight from '../SlideRight';
import theme from '../../theme';

const renderComponent = (EffectComponent = SlideRight, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('SlideRight', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render SlideRight', () => {
    const renderedComponent = renderComponent(SlideRight, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
