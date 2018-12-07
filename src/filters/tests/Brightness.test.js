import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Brightness from '../Brightness';
import theme from '../../theme';

const renderComponent = (EffectComponent = Brightness, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Brightness', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Brightness', () => {
    const renderedComponent = renderComponent(Brightness, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
