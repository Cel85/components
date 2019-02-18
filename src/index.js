import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4.45PM"
                    content="Good post"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at w.45PM"
                    content="NO!"
                avatar={faker.image.avatar()} />
                </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 4.45PM"
                    content="YES YES!"
                    avatar={faker.image.avatar()} />
                </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));