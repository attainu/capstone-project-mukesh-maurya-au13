import React from 'react'
import {useSelector} from "react-redux";


const StudentProfile = () => {
  const userLogin = useSelector(state => state.userLogin)

  const {userInfo } = userLogin;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>UserEmail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userInfo.user.name}</td>
            <td>{userInfo.user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentProfile
