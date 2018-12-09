import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import ExpandUp from '../ExpandUp';
import theme from '../../theme';

const renderComponent = (EffectComponent = ExpandUp, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('ExpandUp', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render ExpandUp', () => {
    const renderedComponent = renderComponent(ExpandUp, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
