import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Flip from '../Flip';
import theme from '../../theme';

const renderComponent = (EffectComponent = Flip, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Flip', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Flip', () => {
    const renderedComponent = renderComponent(Flip, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
