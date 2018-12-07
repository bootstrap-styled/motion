import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Bounce from '../Bounce';
import theme from '../../theme';

const renderComponent = (EffectComponent = Bounce, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Bounce', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Bounce', () => {
    const renderedComponent = renderComponent(Bounce, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
