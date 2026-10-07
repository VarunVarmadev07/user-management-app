function UserCard({ user, deleteUser }) {

  return (

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      {/* Avatar */}

      <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">

        {user.name.charAt(0)}

      </div>


      {/* Name */}

      <h2 className="text-xl font-bold text-gray-800">

        {user.name}

      </h2>


      {/* Email */}

      <p className="text-gray-500 mt-2 break-all">

        {user.email}

      </p>


      {/* Company */}

      {user.company && (

        <p className="text-sm text-gray-400 mt-2">

          {user.company.name}

        </p>

      )}


      {/* Delete */}

      <button
        onClick={() => deleteUser(user.id)}
        className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >

        Delete User

      </button>

    </div>

  );
}

export default UserCard;