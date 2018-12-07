import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RotateLeft from '../RotateLeft';
import theme from '../../theme';

const renderComponent = (EffectComponent = RotateLeft, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('RotateLeft', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render RotateLeft', () => {
    const renderedComponent = renderComponent(RotateLeft, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
