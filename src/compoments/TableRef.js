import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Checkbox, Table, Header } from 'semantic-ui-react';
import { selectedUserAdd, selectedUserRemove } from '../actions/user';
import { addPieData, removePieData } from '../actions/pie';

/**
 * React inline style
 * Inline it's because it's clearer.
 */
const tableStyle = {
  width: '100vw',
  overflowX: 'scroll',
};

/**
 * When the any checkbox changes.
 * @param event
 * @param props
 * @param user
 */
const handleCheckBoxChange = (event, props, user) => {
  if (event.target.checked) {
    props.selectedUserAdd(event.target.id);
    const len = props.posts.filter(post => post.userId === parseInt(event.target.id, 10)).length;
    props.addPieData({ id: user.id, name: user.name, value: len });
  } else {
    props.selectedUserRemove(event.target.id);
    props.removePieData(parseInt(event.target.id, 10));
  }
};

/**
 * When fetch user.
 * Print all users.
 */
const TableFullWidth = props => (
  <div style={tableStyle}>
    <Table unstackable celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Website</Table.HeaderCell>
          <Table.HeaderCell>Company</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.users.map(user => (
          <Table.Row key={user.id}>
            <Table.Cell collapsing>
              <Checkbox
                onChange={event => handleCheckBoxChange(event, props, user)}
                slider
                id={user.id}
              />
            </Table.Cell>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.phone}</Table.Cell>
            <Table.Cell>{user.website}</Table.Cell>
            <Table.Cell>{user.company.name}</Table.Cell>
            <Table.Cell>
              {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${
                user.address.zipcode
              } `}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);

/**
 * Main container for user table.
 * It checks fetch,success and fail situation.
 */
const TableComp = props => (
  <div className="table-graph">
    <Header as="h1" textAlign="center">
      User Table
    </Header>
    {props.isSuccess && TableFullWidth(props)}
    {props.isFetching && (
      <ul>
        <li>Yükleniyor !</li>
      </ul>
    )}
    {props.isFail && (
      <ul>
        <li>Hata !</li>
      </ul>
    )}
  </div>
);

/**
 *   Dispatch to Props for redux usage
 */
const mapStateToProps = state => {
  const res = {
    isSuccess: state.user.isSuccess,
    isFetching: state.user.isFetching,
    isFail: state.user.isFail,
    posts: state.post.posts,
    users: state.user.users,
  };
  return res;
};

/**
 * Dispatch to Props for redux usage
 * It's empty because i dont need any function.
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectedUserAdd,
      selectedUserRemove,
      addPieData,
      removePieData,
    },
    dispatch,
  );

/**
 * Proptypes control via prop-types library.
 */
TableComp.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFail: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

/**
 * redux <=>react connector with export
 */
export default connect(mapStateToProps, mapDispatchToProps)(TableComp);
