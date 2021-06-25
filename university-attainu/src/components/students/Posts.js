import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="table table-striped table-hover ">
          <thead className="border-2">
            <tr className="">
              <th>Test Name</th>
              <th>Submission Date</th>
              <th>Question Link</th>
              <th>Submission Link</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>Test - {post.title}</td>
              <td>May 30, 2021</td>
              <td> Question</td>
              <td> Github</td>
              <td>
                <span class="label success">Pass{posts.completed}</span>
              </td>
              <td> {post.title}</td>
              <td></td>
              <td>Front-End - 75.00%</td>
            </tr>
           ))}
          </tbody>
        </table>
    // <ul className='list-group mb-4'>
    //   {posts.map(post => (
    //     <li key={post.id} className='list-group-item'>
    //       {post.title}
    //     </li>
    //   ))}
    // </ul>
  );
};

export default Posts;
