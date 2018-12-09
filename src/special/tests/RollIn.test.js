import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RollIn from '../RollIn';
import theme from '../../theme';

const renderComponent = (EffectComponent = RollIn, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('RollIn', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render RollIn', () => {
    const renderedComponent = renderComponent(RollIn, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
