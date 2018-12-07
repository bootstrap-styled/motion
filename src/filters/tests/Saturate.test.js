import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Saturate from '../Saturate';
import theme from '../../theme';

const renderComponent = (EffectComponent = Saturate, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Saturate', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Saturate', () => {
    const renderedComponent = renderComponent(Saturate, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
