/**
 * Testing our Lightspeeds components
 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { LightIn, LightOut } from '../index';

const renderComponent = (EffectComponent = LightIn, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('lightspeed', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });

  it('should render a <LightIn> tag', () => {
    const renderedComponent = renderComponent(LightIn, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <LightOut> tag', () => {
    const renderedComponent = renderComponent(LightOut, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
