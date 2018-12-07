import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Contrast from '../Contrast';
import theme from '../../theme';

const renderComponent = (EffectComponent = Contrast, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Contrast', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Contrast', () => {
    const renderedComponent = renderComponent(Contrast, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
