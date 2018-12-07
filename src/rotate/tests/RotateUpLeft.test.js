import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RotateUpLeft from '../RotateUpLeft';
import theme from '../../theme';

const renderComponent = (EffectComponent = RotateUpLeft, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('RotateUpLeft', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render RotateUpLeft', () => {
    const renderedComponent = renderComponent(RotateUpLeft, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
