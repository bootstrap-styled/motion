import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import LightOut from '../LightOut';
import theme from '../../theme';

const renderComponent = (EffectComponent = LightOut, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('LightOut', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render LightOut', () => {
    const renderedComponent = renderComponent(LightOut, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
