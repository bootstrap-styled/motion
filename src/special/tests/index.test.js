/**
 * Testing our Specials components
 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import {
  Flash, RollOut, RollIn, Rubber, Swing, Zoom, Hinge, Pulse, ExpandUp, Entrance, Hatch,
} from '../index';

const renderComponent = (EffectComponent = Flash, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('specials', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });

  it('should render a <Flash> tag', () => {
    const renderedComponent = renderComponent(Flash, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RollOut> tag', () => {
    const renderedComponent = renderComponent(RollOut, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RollIn> tag', () => {
    const renderedComponent = renderComponent(RollIn, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Rubber> tag', () => {
    const renderedComponent = renderComponent(Rubber, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Swing> tag', () => {
    const renderedComponent = renderComponent(Swing, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Zoom> tag', () => {
    const renderedComponent = renderComponent(Zoom, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Hinge> tag', () => {
    const renderedComponent = renderComponent(Hinge, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Pulse> tag', () => {
    const renderedComponent = renderComponent(Pulse, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <ExpandUp> tag', () => {
    const renderedComponent = renderComponent(ExpandUp, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Entrance> tag', () => {
    const renderedComponent = renderComponent(Entrance, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Hatch> tag', () => {
    const renderedComponent = renderComponent(Hatch, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
