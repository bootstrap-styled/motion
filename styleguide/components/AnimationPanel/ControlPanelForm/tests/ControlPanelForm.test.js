/**
 * Testing our Footer component
 */
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { mount } from 'enzyme';
import ControlPanelForm from '../index';
import animationsConfigImport from '../../settings/animations';

const renderComponent = (props = {}) => mount(
  <BootstrapProvider>
    <ControlPanelForm {...props} />
  </BootstrapProvider>
);

describe('<ControlPanelForm />', () => {
  let handleAddAnimation;
  let handleChangeAnimation;
  let animationsConfig;
  let toggleHighlight;
  let isHighlightOpen;
  let clearAnimation;

  beforeAll(() => {
    handleAddAnimation = jest.fn();
    handleChangeAnimation = jest.fn();
    animationsConfig = animationsConfigImport;
    toggleHighlight = jest.fn();
    isHighlightOpen = false;
    clearAnimation = jest.fn();
  });

  it('should render an <ControlPanelForm />', () => {
    const renderedComponent = renderComponent({
      handleAddAnimation,
      handleChangeAnimation,
      animationsConfig,
      toggleHighlight,
      isHighlightOpen,
      clearAnimation,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
