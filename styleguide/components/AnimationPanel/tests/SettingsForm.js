/**
 * Testing our SettingsForm component
 */
import React from 'react';
import { shallow } from 'enzyme';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import SettingsForm from '../SettingsForm/SettingsForm';

const renderComponent = (props = {}) => shallow(
  <BootstrapProvider>
    <SettingsForm {...props} />
  </BootstrapProvider>
);

describe('<SettingsForm />', () => {
  it('should render <SettingsForm />', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
