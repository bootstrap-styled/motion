import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RollOut from '../RollOut';
import theme from '../../theme';

const renderComponent = (EffectComponent = RollOut, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('RollOut', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render RollOut', () => {
    const renderedComponent = renderComponent(RollOut, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
