import React, { useState, useEffect } from "react";
import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Users() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  const AddNewRecord = () => {
   
  setPost( [ ...(post || []),{userId: 101, id: 101, title: 'rt', body: 'body'}]);
  }

  useEffect(() => {
    axios
      .get(`${baseURL}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });

    return () => {};
  }, []);
  

  return (
    <div>
        <button onClick={AddNewRecord}> Add </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {post.map((row, index) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}

export default Users;
