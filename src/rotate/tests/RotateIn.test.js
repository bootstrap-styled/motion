import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RotateIn from '../RotateIn';
import theme from '../../theme';

const renderComponent = (EffectComponent = RotateIn, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('RotateIn', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render RotateIn', () => {
    const renderedComponent = renderComponent(RotateIn, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
