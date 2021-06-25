import React from "react";

const AssignmentList = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="table table-striped table-hover ">
      <thead className="border-2">
        <tr className="">
          <th>Assignment Name</th>
          <th>Submission Date</th>
          <th>Question Link</th>
          <th>Submission Link</th>
          <th>Status</th>
          <th>Feedback</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>May 30, 2021</td>
            <td>
              {" "}
              <a
                href="https://res.cloudinary.com/bookshelf/raw/upload/v1624175351/Kushal_s_Resume_3_-converted_yuzvkt.docx"
                download
              >
                <img
                  src="/images/myw3schoolsimage.jpg"
                  alt="W3Schools"
                  width="104"
                  height="142"
                />
              </a>
            </td>
            <td> Github</td>
            <td>
              <span class="label success">Pass</span>
            </td>
            <td> {post.title}</td>
            <td></td>
            <td>Front-End - 75.00%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssignmentList;
