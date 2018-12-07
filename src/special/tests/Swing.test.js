import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Swing from '../Swing';
import theme from '../../theme';

const renderComponent = (EffectComponent = Swing, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Swing', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Swing', () => {
    const renderedComponent = renderComponent(Swing, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
