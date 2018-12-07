import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import FadeIn from '../FadeIn';
import theme from '../../theme';

const renderComponent = (EffectComponent = FadeIn, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('FadeIn', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render FadeIn', () => {
    const renderedComponent = renderComponent(FadeIn, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
