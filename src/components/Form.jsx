import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  function handleData(e) {
    const { name, value } = e.target;

    // Prevent age from being set if greater than 90
    if (name === "age" && parseInt(value) > 90) {
      return;
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit() {
    console.log("Name:", data.name);
    console.log("Age:", data.age);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">User Form</h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Name:</label>
          <input
            name="name"
            value={data.name}
            onChange={handleData}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Age:</label>
          <input
            name="age"
            value={data.age}
            onChange={handleData}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Enter your age"
          />
        </div>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
