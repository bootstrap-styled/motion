import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import BounceUp from '../BounceUp';
import theme from '../../theme';

const renderComponent = (EffectComponent = BounceUp, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('BounceUp', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render BounceUp', () => {
    const renderedComponent = renderComponent(BounceUp, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
