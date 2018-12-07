import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Hinge from '../Hinge';
import theme from '../../theme';

const renderComponent = (EffectComponent = Hinge, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Hinge', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Hinge', () => {
    const renderedComponent = renderComponent(Hinge, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
