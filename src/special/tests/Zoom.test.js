import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Zoom from '../Zoom';
import theme from '../../theme';

const renderComponent = (EffectComponent = Zoom, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Zoom', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Zoom', () => {
    const renderedComponent = renderComponent(Zoom, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
