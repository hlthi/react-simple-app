import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import TableComp from './Table';
import Graph from './Graph';
import Map from './Map';
import { fetchPost } from '../actions/post';
import { fetchUser } from '../actions/user';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    // fetch post when Home Componeet did mount
    this.props.fetchPost();
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Map />
        <Graph />
        <TableComp />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPost,
      fetchUser,
    },
    dispatch,
  );

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
