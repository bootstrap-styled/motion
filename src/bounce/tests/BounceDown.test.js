import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import BounceDown from '../BounceDown';
import theme from '../../theme';

const renderComponent = (EffectComponent = BounceDown, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('BounceDown', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render BounceDown', () => {
    const renderedComponent = renderComponent(BounceDown, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
