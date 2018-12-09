import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import BounceLeft from '../BounceLeft';
import theme from '../../theme';

const renderComponent = (EffectComponent = BounceLeft, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('BounceLeft', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render BounceLeft', () => {
    const renderedComponent = renderComponent(BounceLeft, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
