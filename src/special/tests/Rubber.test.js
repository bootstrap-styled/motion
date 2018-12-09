import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Rubber from '../Rubber';
import theme from '../../theme';

const renderComponent = (EffectComponent = Rubber, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Rubber', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Rubber', () => {
    const renderedComponent = renderComponent(Rubber, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
