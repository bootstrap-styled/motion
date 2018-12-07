import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Flash from '../Flash';
import theme from '../../theme';

const renderComponent = (EffectComponent = Flash, props = {}) => mount(
  <ThemeProvider theme={theme}>
    <EffectComponent {...props} />
  </ThemeProvider>
);

describe('Flash', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });
  it('should render Flash', () => {
    const renderedComponent = renderComponent(Flash, { children });
    expect(renderedComponent.length).toBe(1);
  });
});
