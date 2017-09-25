/**
 * Testing our Rotates components
 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { RotateIn, RotateLeft, RotateRight, RotateUpLeft, RotateUpRight } from '../index';

const renderComponent = (EffectComponent = RotateIn, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('rotate', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });

  it('should render a <RotateIn> tag', () => {
    const renderedComponent = renderComponent(RotateIn, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RotateLeft> tag', () => {
    const renderedComponent = renderComponent(RotateLeft, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RotateRight> tag', () => {
    const renderedComponent = renderComponent(RotateRight, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RotateUpLeft> tag', () => {
    const renderedComponent = renderComponent(RotateUpLeft, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RotateUpRight> tag', () => {
    const renderedComponent = renderComponent(RotateUpRight, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
