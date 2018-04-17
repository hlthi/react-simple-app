import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import TableComp from './TableRef';
import Graph from './Graph';
import Map from './Map';
import { fetchPost } from '../actions/post';
import { fetchUser } from '../actions/user';
import PropTypes from 'prop-types';

/**
 * Main container for app.
 * It is Stateful compoment because i need componentdidmount function.
 * It is only real stateful compoment in react app.
 */
class Home extends Component {
  /**
   * Fetch post and user from rest endpoint.
   * Call redux.
   */
  componentDidMount() {
    this.props.fetchPost();
    this.props.fetchUser();
  }

  /**
   * Main layout with semantic ui.
   */
  render() {
    return (
      <div className="main-container">
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Map />
            </Grid.Column>
            <Grid.Column width={8}>
              <Graph />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <TableComp />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

/**
 * Dispatch to Props for redux usage
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPost,
      fetchUser,
    },
    dispatch,
  );

/**
 * Proptypes control via prop-types library.
 */
Home.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

/**
 * redux <=>react connector with export
 */
export default connect(null, mapDispatchToProps)(Home);
