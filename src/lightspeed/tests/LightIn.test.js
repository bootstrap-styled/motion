import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import LightIn from '../LightIn';
import theme from '../../theme';

const renderComponent = (EffectComponent = LightIn, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('LightIn', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render LightIn', () => {
    const renderedComponent = renderComponent(LightIn, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
