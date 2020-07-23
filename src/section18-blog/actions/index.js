import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch, setState) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
// export const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);

export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach((userId) => {
  //   dispatch(fetchUser(userId));
  // });
  // await Promise.all(userIds.map((userId) => dispatch(fetchUser(userId)))).then(() => {});

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((userId) => dispatch(fetchUser(userId)))
    .value();
};
