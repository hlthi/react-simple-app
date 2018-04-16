import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/post';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react';
import { fetchUser } from '../actions/user';

const tableStyle = {
  width: '100vw',
  overflowX: 'scroll',
};

const TableExampleFullWidth = props => (
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
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
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

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="4">
            <Button size="small">Approve</Button>
            <Button disabled size="small">
              Approve All
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </div>
);

const TableComp = props => {
  // const postsPrint = props.posts.map(obj => <li>{obj.id}</li>);
  // console.log(`Post print${postsPrint}`);
  const usersPrint = props.users.map(obj => (
    <li data-id={obj.id} onClick={liClick}>
      {obj.name}
    </li>
  ));
  console.log(`Post print${usersPrint}`);

  return (
    <div className="table-graph">
      {TableExampleFullWidth(props)}
      <h1>Table HERE!</h1>
      {props.isSuccess && (
        <ul>
          {usersPrint}
          <li>{props.users[0].name}</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      )}
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
};

const liClick = event => {
  console.log(event.target.getAttribute('data-id'));
};

const mapStateToProps = state => ({
  isSuccess: state.user.isSuccess,
  isFetching: state.user.isFetching,
  isFail: state.user.isFail,
  posts: state.post.posts,
  users: state.user.users,
});

const mapDispatchToProps = dispatch => {
  bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComp);
