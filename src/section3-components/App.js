import React from 'react';
import faker from 'faker/locale/en';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => (
  <div className="ui container comments">
    <ApprovalCard>
      <h4>Warning!</h4>
      Are you sure you want to do this?
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content={faker.lorem.sentence()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:45PM"
        avatar={faker.image.avatar()}
        content={faker.lorem.sentence()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Today at 3:45PM"
        avatar={faker.image.avatar()}
        content={faker.lorem.sentence()}
      />
    </ApprovalCard>
  </div>
);

export default App;
