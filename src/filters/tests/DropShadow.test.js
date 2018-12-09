import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import DropShadow from '../DropShadow';
import theme from '../../theme';

const renderComponent = (EffectComponent = DropShadow, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('DropShadow', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render DropShadow', () => {
    const renderedComponent = renderComponent(DropShadow, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
