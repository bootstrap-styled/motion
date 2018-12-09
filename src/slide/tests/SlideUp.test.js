import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import SlideUp from '../SlideUp';
import theme from '../../theme';

const renderComponent = (EffectComponent = SlideUp, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('SlideUp', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render SlideUp', () => {
    const renderedComponent = renderComponent(SlideUp, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
