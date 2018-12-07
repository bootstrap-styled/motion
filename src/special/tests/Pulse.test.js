import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Pulse from '../Pulse';
import theme from '../../theme';

const renderComponent = (EffectComponent = Pulse, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Pulse', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Pulse', () => {
    const renderedComponent = renderComponent(Pulse, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
