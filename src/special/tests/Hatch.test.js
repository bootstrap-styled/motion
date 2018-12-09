import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Hatch from '../Hatch';
import theme from '../../theme';

const renderComponent = (EffectComponent = Hatch, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Hatch', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Hatch', () => {
    const renderedComponent = renderComponent(Hatch, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
