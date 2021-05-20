import React, { useState, useEffect } from "react";

import axios from "axios";
import PostItem from './PostItem'

const PostList = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/post/getposts")
      .then((res) => {
        setPostData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
//   console.log(postData)
   
  return (
    <div>
      <h1>PostList</h1>
          {
              postData.map(post=>{
               return(
               <div>
                   <PostItem post={post} />
                </div>
           )
       })
      }
    </div>
  );
};
export default PostList;
