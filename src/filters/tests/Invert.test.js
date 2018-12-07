import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Invert from '../Invert';
import theme from '../../theme';

const renderComponent = (EffectComponent = Invert, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Invert', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Invert', () => {
    const renderedComponent = renderComponent(Invert, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
