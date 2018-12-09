import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import FadeInDown from '../FadeInDown';
import theme from '../../theme';

const renderComponent = (EffectComponent = FadeInDown, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('FadeInDown', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render FadeInDown', () => {
    const renderedComponent = renderComponent(FadeInDown, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
