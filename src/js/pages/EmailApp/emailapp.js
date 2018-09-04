import React, { Component } from 'react';

import { Panel, PanelBody, PanelRow, Dropdown, TextField } from '../../components';

import './style.scss';

class EmailApp extends Component {

  render() {
    //const handleChange = e => setState({ value: e});
    const options = [{ id: 0, label: 'Inbox', value: 'Inbox'}, { id: 1, label: 'Spam', value: 'Spam'}, { id: 2, label: 'Delete', value: 'Delete'}]

    return (
      <div id="email-app" styleName="email-app">
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
                rightIcon="icon-search"
                //rightIcon={<img src="http://via.placeholder.com/20x20" />}
                autoComplete="off"
              />
            </PanelRow>
          </PanelBody>
        </Panel>
      </div>
    )
  }
}

export default EmailApp;
