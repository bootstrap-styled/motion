import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Sepia from '../Sepia';
import theme from '../../theme';

const renderComponent = (EffectComponent = Sepia, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Sepia', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Sepia', () => {
    const renderedComponent = renderComponent(Sepia, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
