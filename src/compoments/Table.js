import React from 'react';
import { connect } from 'react-redux';

const Table = props => {
  console.log(props.userState);
  return (
    <div className="table-graph">
      <h1>Buraya table {props.name} Geliyor</h1>
      <ul>
        {props.userState !== null ? (
          <li>Yeah Buraya user adı gelsin{props.userState.name}</li>
        ) : (
          <li>Tıkladın mı acaba ?</li>
        )}

        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  userState: state.user,
});

export default connect(mapStateToProps)(Table);
