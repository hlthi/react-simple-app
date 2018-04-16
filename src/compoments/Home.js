import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Table from './Table';
import Graph from './Graph';
import Map from './Map';
import { fetchPost } from '../actions/post';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    // fetch post when Home Componeet did mount
    this.props.fetchPost();
  }

  render() {
    return (
      <div>
        <Map />
        <Graph />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPost,
    },
    dispatch,
  );

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
