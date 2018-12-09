import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Grayscale from '../Grayscale';
import theme from '../../theme';

const renderComponent = (EffectComponent = Grayscale, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Grayscale', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Grayscale', () => {
    const renderedComponent = renderComponent(Grayscale, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
