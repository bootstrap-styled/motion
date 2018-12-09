import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Blur from '../Blur';
import theme from '../../theme';

const renderComponent = (EffectComponent = Blur, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);


describe('Blur', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Blur', () => {
    const renderedComponent = renderComponent(Blur, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
