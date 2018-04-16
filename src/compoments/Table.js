import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/post';

const Table = props => {
  //const postsPrint = props.posts.map(obj => <li>{obj.id}</li>);
  //console.log(`Post print${postsPrint}`);

  return (
    <div className="table-graph">
      <h1>Table HERE {props.isFail} !</h1>
      {props.isSuccess && (
        <ul>
          {postsPrint}
          <li>{props.posts[0].title}</li>
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

const mapStateToProps = state => ({
  isSuccess: state.post.isSuccess,
  isFetching: state.post.isFetching,
  isFail: state.post.isFail,
  posts: state.post.posts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPost,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Table);
