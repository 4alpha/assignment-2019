import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {

    return (
        <div className="ui container comments">
          <ApprovalCard>
          <CommentDetail 
          time="10:32" 
          text="NICE"
          />
          </ApprovalCard>
          
          <ApprovalCard>
          <CommentDetail 
          time="04:26" 
          text="OK type"
          />
          </ApprovalCard>
          
          <ApprovalCard>
          <CommentDetail 
          time="3:15" 
          text="Good 1"
          />
          </ApprovalCard>
        </div>

    );
    
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);