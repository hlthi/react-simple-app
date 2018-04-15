import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, incrementAsync, decrement, decrementAsync } from '../reducers/counter';
import { selectUser } from '../actions/index';
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
      <button onClick={props.increment} >
        Increment
      </button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrement
      </button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>Go to about page via redux</button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
      selectUser,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
