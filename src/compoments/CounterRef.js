import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import {
  incrementCounter,
  decrementCounter,
  incrementRequested,
  decrementRequested,
} from '../actions/counter';
import Table from './Table';

const obj = {
  name: 'yane adama bak',
};

const Home = props => (
  <div>
    <Table name="ada" />
    <h1 onClick={() => props.selectUser(obj)}>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.incrementCounter}>Increment</button>
      <button onClick={props.incrementRequested}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrementCounter}>Decrement</button>
      <button onClick={props.decrementRequested}>Decrement Async</button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementCounter,
      decrementCounter,
      incrementRequested,
      decrementRequested,
      selectUser,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
