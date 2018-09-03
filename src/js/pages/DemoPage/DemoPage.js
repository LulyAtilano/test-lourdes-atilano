import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import reduxPage from '@/store/reduxPage';

import { Panel, PanelBody, PanelRow, Table, ModalAnimation, EmptyState, Switch } from '@/components';

import tableColumns from './columns';
import * as queries from './graphql/queries';
import { MuseumDetailModal } from './components';

import './style.scss';

const mapStateToProps = ({ pages: { demoPage } }) => demoPage;

const buildingShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  street: PropTypes.string,
  country: PropTypes.string,
  neighborhood: PropTypes.string,
});

@connect(mapStateToProps, {})
@graphql(queries.buildings, {
  options: {
    variables: {
      BuildingFilter: {},
    },
    fetchPolicy: 'cache-and-network',
  },
})
@reduxPage({ page: 'demoPage' })
class DemoPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allBuildings: PropTypes.arrayOf(buildingShape),
    }),
    modals: PropTypes.shape({
      museumDetail: PropTypes.shape({
        showModal: PropTypes.bool,
      }),
    }),
  };

  static defaultProps = {
    modals: {
      museumDetail: {
        showModal: false,
      },
    },
  };

  state = { museum: {}, isEmpty: false }

  onSwitchChange = () => {
    const { isEmpty } = this.state;
    this.setState({ isEmpty: !isEmpty });
  }

  openDetailModal = museum => {
    const { openModal } = this.props;
    this.setState({ museum });

    openModal('museumDetail');
  };

  closeDetailModal = () => {
    const { closeModal } = this.props;
    this.setState({ museum: {} });

    closeModal('museumDetail');
  }

  render() {
    const { museum, isEmpty } = this.state;
    const { data: { allBuildings }, modals: { museumDetail } } = this.props;
    const showModal = museumDetail ? museumDetail.showModal : false;

    return (
      <div id="demo-page" styleName="demo-page">
        <Panel title="">
          <PanelBody>
            <PanelRow>
              <div className="col-3">
                <span>¿Simular datos vacíos?</span>
              </div>
              <div className="col-9">
                <Switch
                  id="empty"
                  prefixText="No"
                  suffixText="Sí"
                  checked={isEmpty}
                  onChange={this.onSwitchChange}
                />
              </div>
            </PanelRow>
          </PanelBody>
        </Panel>
        {!isEmpty && (
          <Fragment>
            <Panel title="Cool museums 🏛" subtitle="From México and the world">
              <PanelBody>
                <PanelRow>
                  <Table
                    styleName="museum-list"
                    columns={tableColumns}
                    items={allBuildings}
                    onClickItem={this.openDetailModal}
                  />
                </PanelRow>
              </PanelBody>
            </Panel>
            <ModalAnimation>
              {showModal && <MuseumDetailModal museum={museum} onClose={this.closeDetailModal} />}
            </ModalAnimation>
          </Fragment>
        )}
        {isEmpty && (
          <EmptyState
            styleName="empty-panel"
            title="🏛"
            description="¡Agrega museos en Graph Cool!"
            onClick={() => {}}
            buttonText="Llévame"
            buttonColor="primary"
          />
        )}
      </div>
    );
  }
}

export default DemoPage;
