import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import FadeInUp from '../FadeInUp';
import theme from '../../theme';

const renderComponent = (EffectComponent = FadeInUp, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('FadeInUp', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render FadeInUp', () => {
    const renderedComponent = renderComponent(FadeInUp, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
