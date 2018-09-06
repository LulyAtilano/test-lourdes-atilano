import React, { Component } from 'react';

import { Panel, PanelBody, PanelRow, Dropdown, TextField, Button } from '../../components';

import './style.scss';

class EmailApp extends Component {

  render() {
    //const handleChange = e => setState({ value: e});
    const options = [{ id: 0, label: 'Inbox', value: 'Inbox'}, { id: 1, label: 'Spam', value: 'Spam'}, { id: 2, label: 'Delete', value: 'Delete'}]

    return (
      <div id="email-app" styleName="email-app">
        <div styleName="email-list">
          <Panel title="Email App">
            <PanelBody>
              <PanelRow styleName="row-header">
                <h5> Inbox </h5>
                <label> 3 </label>
                <Dropdown styleName="dropdown-header"
                  id="dropdown-filter"
                  name="dropdown-filter"
                  defaultOptionText="Filter by"
                  options={options}
                  color={false}
                  errorText=""
                  //onchange={handleChange}
                  //selectedOption={state.value || {}}
                  //showActiveItem
                />
              </PanelRow>
              <PanelRow>
                <TextField styleName="input-search"
                  id="name"
                  name="name"
                  label=""
                  placeholder="Search"
                  //rightIcon={img src="https://fontawesome.com/icons/search?style=solid"}
                  //rightIcon={<img src="http://via.placeholder.com/20x20" />}
                  autoComplete="off"
                />
              </PanelRow>
            </PanelBody>
          </Panel>
        </div>
        <div styleName="email-container">
          <Panel title="Email">
            <PanelBody>
              <PanelRow styleName="buttons-row">
                <Button styleName="error-btn-header"
                  color= "error"
                > Delete </Button>
                <Button styleName="spam-btn-header"
                > Spam </Button>
                <Button styleName="info-btn-header"
                  color="info"
                > Mark as unread </Button>
              </PanelRow>
              <PanelRow styleName="row-header-user">
                  <h3> _Name User </h3>
              </PanelRow>
              <PanelRow styleName="row-subjects-tags">
                  <span> Inbox </span>
                  <span> business </span>
              </PanelRow>
              <PanelRow>
                <div styleName="">_email content_</div>
              </PanelRow>
              <PanelRow styleName="row-final-reply">
                icon
                <Button
                  color="primary"
                >
                  Replay
                </Button>
              </PanelRow>
            </PanelBody>
          </Panel>
        </div>
      </div>
    )
  }
}

export default EmailApp;
