import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import FadeInLeft from '../FadeInLeft';
import theme from '../../theme';

const renderComponent = (EffectComponent = FadeInLeft, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('FadeInLeft', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render FadeInLeft', () => {
    const renderedComponent = renderComponent(FadeInLeft, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
