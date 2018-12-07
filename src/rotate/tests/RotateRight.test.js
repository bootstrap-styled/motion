import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RotateRight from '../RotateRight';
import theme from '../../theme';

const renderComponent = (EffectComponent = RotateRight, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('RotateRight', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render RotateRight', () => {
    const renderedComponent = renderComponent(RotateRight, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
