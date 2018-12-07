import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Entrance from '../Entrance';
import theme from '../../theme';

const renderComponent = (EffectComponent = Entrance, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Entrance', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Entrance', () => {
    const renderedComponent = renderComponent(Entrance, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
