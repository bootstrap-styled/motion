import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import HueRotate from '../HueRotate';
import theme from '../../theme';

const renderComponent = (EffectComponent = HueRotate, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('HueRotate', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render HueRotate', () => {
    const renderedComponent = renderComponent(HueRotate, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
