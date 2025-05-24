/* eslint-disable no-unused-vars */
import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/Context";
import { auth } from "../Firebase/Firebase.config";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const {deleteCurrentUser, currentUser} = use(AuthContext)
  const user = auth?.currentUser;

  const handleDeleteUser = (id) => {
    console.log(id);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://coffee-store-server-five.vercel.app/users/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){

            const remainingUser = users.filter(user => user._id != id)
            setUsers(remainingUser)
            deleteCurrentUser(user)
            .then(result => {
                console.log(result);
            }).catch(error => {
                console.log(error.message);
            })
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            console.log("confirmation after deleted", data);
        }
    })
  }
});
  }
  return (
    <div>
      <h1 className="text-5xl font-semibold">Users Data here</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    No.
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>
                      {index + 1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.phone}
                  </td>
                  <td>Purple</td>
                  <th className="space-x-2">
                    <button className="btn btn-xs">V</button>
                    <button className="btn btn-xs">E</button>
                    <button onClick={() => handleDeleteUser(user._id)} className="btn btn-xs">X</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
