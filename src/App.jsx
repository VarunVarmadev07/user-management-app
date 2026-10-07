import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

import "./App.css"

function App() {

  // Store users
  const [users, setUsers] = useState([]);

  // Search input
  const [search, setSearch] = useState("");

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");


  // Fetch users from API
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })

      .then((data) => {

        setUsers(data);
        setLoading(false);

      })

      .catch((error) => {

        setError(error.message);
        setLoading(false);

      });

  }, []);


  // Add user
  function addUser(newUser) {

  const user = {
    id: Date.now(),
    name: newUser.name,
    email: newUser.email,
    company: {
      name: newUser.company
    }
  };

  setUsers((previousUsers) => [
    ...previousUsers,
    user
  ]);
}

  // Delete user
  function deleteUser(id) {

    setUsers((previousUsers) => {

      return previousUsers.filter(
        (user) => user.id !== id
      );

    });
  }


  // Search users
  const filteredUsers = users.filter((user) => {

    return user.name
      .toLowerCase()
      .includes(search.toLowerCase());

  });


  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />


      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* Heading */}

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            User Management App
          </h1>

          <p className="text-gray-500 mt-2">
            React + JavaScript + Tailwind CSS
          </p>

        </div>


        {/* Search */}

        <div className="mb-6">

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>


        {/* Form */}

        <UserForm addUser={addUser} />


        {/* Loading */}

        {loading && (

          <div className="text-center py-10">

            <p className="text-lg text-gray-600">
              Loading users...
            </p>

          </div>

        )}


        {/* Error */}

        {error && (

          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">

            <p>
              Error: {error}
            </p>

          </div>

        )}


        {/* Users */}

        {!loading && !error && (

          <UserList
            users={filteredUsers}
            deleteUser={deleteUser}
          />

        )}

      </main>

    </div>
  );
}

export default App;