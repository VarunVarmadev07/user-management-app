import { useState } from "react";

function UserForm({ addUser }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      company.trim() === ""
    ) {

      alert("Please fill all fields");

      return;
    }

    addUser({
      name: name,
      email: email,
      company: company
    });

    setName("");
    setEmail("");
    setCompany("");
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-8"
    >

      <h2 className="text-xl font-semibold mb-4">
        Add New User
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          placeholder="Enter company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        />

      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Add User
      </button>

    </form>
  );
}

export default UserForm;