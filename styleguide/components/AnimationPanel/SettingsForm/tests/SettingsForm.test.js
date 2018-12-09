/**
 * Testing our SettingsForm component
 */
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { theme as themeMotion } from 'bootstrap-styled-motion';
import { mount } from 'enzyme';
import { AnimationPanel } from '../../index';
import SettingsForm from '../SettingsForm';
import settingsImport from '../../settings/settings';
import animationsImport from '../../settings/animations';

const renderComponent = (props = {}) => mount(
  <BootstrapProvider theme={themeMotion}>
    <SettingsForm {...props} />
  </BootstrapProvider>
);

describe('<SettingsForm />', () => {
  let settings;
  let animationConfig;
  let panelTabName;
  let onChange;

  beforeAll(() => {
    settings = settingsImport;
    animationConfig = animationsImport.flash;
    panelTabName = AnimationPanel.TAB_THEME_PROVIDER;
    onChange = jest.fn();
  });

  it('should render an <SettingsForm /> tag', () => {
    const renderedComponent = renderComponent({
      settings,
      animationConfig,
      panelTabName,
      onChange,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
