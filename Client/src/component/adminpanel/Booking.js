import React from 'react'

const Booking = () => {
  return (
    <div className='admin-booking'>

    <div className='admin-booking-heading'>
    Booking Details
  </div>
  <div className="admin-booking-searchbox">
        <input
          type="text"
          placeholder="Search by Fullname"
          // value={userSearch}
          // onChange={(e) => searchUser(e.target.value)}
        />
      </div>

      <table className='admin-booking-table'>
        <thead>
          <tr>
            <th>FullName</th>
            <th>Email</th>
            <th>MobileNumber</th>
            <th>DateOfBirth</th>
            <th>LocationName</th>
            <th>HotelName</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredUsers.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.username}</td>
                <td>{value.fullname}</td>
                <td>{value.email}</td>
                <td>{value.mobile_no}</td>
                <td>{value.dateofbirth}</td>
                <td>{value.gender}</td>

              </tr>
            )
          })} */}
        </tbody>
      </table>
    </div>
  )
}

export default Booking