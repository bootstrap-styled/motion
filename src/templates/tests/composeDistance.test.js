/**
 * Testing our composeDistance HOC
 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import composeDistance from '../composeDistance';
import composeAnimation from '../composeAnimation';

describe('composeDistance', () => {
  const makeEffect = () => { // eslint-disable-line arrow-body-style
    return {
      from: {
        width: '0',
      },
      to: {
        width: '100%',
      },
    };
  };
  let DistanceAnimation;
  beforeAll(() => {
    DistanceAnimation = composeDistance(composeAnimation(makeEffect), '$key');
  });

  it('should render an <DistanceAnimation /> with user distance', () => {
    const renderedComponent = mount(
      <ThemeProvider theme={theme}>
        <DistanceAnimation distance="10px">Test</DistanceAnimation>
      </ThemeProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });

  it('should render an <DistanceAnimation /> with theme distance', () => {
    const renderedComponent = mount(
      <ThemeProvider theme={theme}>
        <DistanceAnimation>Test</DistanceAnimation>
      </ThemeProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });
});
