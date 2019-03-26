import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  console.log(props);  
  return (
      <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
              <img src={faker.image.avatar()} alt="Avatar"/>
            </a>
            <div className="content">
              <a href="/" className="author">
              {faker.name.findName()}
              </a>
              <div className="metadata">
                <span className="date"> Today at {props.time} PM</span>
              </div>
              <div className="text">
              {props.text}
              </div>
            </div> 
        </div> 
      </div>
    );
};

export default CommentDetail;