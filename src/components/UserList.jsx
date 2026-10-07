import UserCard from "./UserCard";

function UserList({ users, deleteUser }) {

  if (users.length === 0) {

    return (
      <div className="text-center py-10">

        <p className="text-gray-500 text-lg">
          No users found.
        </p>

      </div>
    );

  }

  return (

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {users.map((user) => (

        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
        />

      ))}

    </div>

  );
}

export default UserList;