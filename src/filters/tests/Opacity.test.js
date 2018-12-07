import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Opacity from '../Opacity';
import theme from '../../theme';

const renderComponent = (EffectComponent = Opacity, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Opacity', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Opacity', () => {
    const renderedComponent = renderComponent(Opacity, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
