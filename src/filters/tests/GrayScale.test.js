import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import GrayScale from '../GrayScale';
import theme from '../../theme';

const renderComponent = (EffectComponent = GrayScale, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('GrayScale', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render GrayScale', () => {
    const renderedComponent = renderComponent(GrayScale, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
