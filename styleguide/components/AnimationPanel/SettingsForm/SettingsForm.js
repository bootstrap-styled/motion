import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { withTheme } from 'styled-components';
import Form from '@bootstrap-styled/v4/lib/Form';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import Label from '@bootstrap-styled/v4/lib/Label';
import Input from '@bootstrap-styled/v4/lib/Input';
import Option from '@bootstrap-styled/v4/lib/Option';
import Row from '@bootstrap-styled/v4/lib/Row';
import Col from '@bootstrap-styled/v4/lib/Col';
import Strong from '@bootstrap-styled/v4/lib/Strong';

class SettingsForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    theme: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
    settings: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
    animationConfig: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
    onChange: PropTypes.func.isRequired,
  }

  state = {};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.onChange(this.state);
    });
  }

  render() {
    const { theme, settings } = omit(this.props, ['animationConfig', 'effect']); // eslint-disable-line

    /* eslint-disable array-callback-return, consistent-return */
    return (
      <Form className="menu-configuration p-1 bd-example bd-example-modal">
        <Row className="row m-0">
          <Col className="col-sm menu-item" >
            <Strong>Select Config</Strong>
            {Object.keys(settings.main).map((key) => (
              <FormGroup key={key} row className="m-0">
                <Label for={key} sm={4} size="sm">{settings.main[key]}</Label>
                <Col sm={8}>
                  <Input type="select" size="sm" name={key} className="mx-3" onChange={this.handleChange}>
                    {Object.keys(theme.motion[key]).map((speed) => (
                      <Option key={speed} value={speed}>{theme.motion[key][speed]}</Option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
            ))}
          </Col>
          <Col className="col-sm menu-item" >
            <Strong>Select Mode</Strong>
            {Object.keys(settings.animation).map((key) => (
              <FormGroup key={key} row className="m-0">
                <Label for={key} sm={4} size="sm">{settings.animation[key]}</Label>
                <Col sm={8}>
                  <Input type="select" size="sm" name={key} className="mx-3" onChange={this.handleChange}>
                    {Object.keys(theme.motion[key]).map((speed) => (
                      <Option key={speed} value={speed}>{theme.motion[key][speed]}</Option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
            ))}
          </Col>
        </Row>
      </Form>
    );
    /* eslint-disable array-callback-return, consistent-return */
  }
}

export default withTheme(SettingsForm);
