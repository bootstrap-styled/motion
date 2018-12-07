import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import FadeInRight from '../FadeInRight';
import theme from '../../theme';

const renderComponent = (EffectComponent = FadeInRight, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('FadeInRight', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render FadeInRight', () => {
    const renderedComponent = renderComponent(FadeInRight, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
