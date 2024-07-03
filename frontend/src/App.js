import React, { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch("/hello")
      .then((response) => response.json())
      .then((data) => setBackendMessage(data.message))
      .catch((error) =>
        console.error("Error fetching backend message:", error)
      );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-red-500">
      <div className="text-center p-6 border-2 border-red-500 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to React-Flask Minimalist Application
        </h1>
        <div className="text-lg mb-6">
          <div className="mb-4">
            <p className="bg-red-100 text-red-700 p-3 rounded border border-red-300">
              Change me by editing frontend/src/App.js
            </p>
          </div>
          <div>
            <p className="bg-red-100 text-red-700 p-3 rounded border border-red-300">
              {backendMessage || "Loading..."}
            </p>
          </div>
        </div>
        <a
          href="https://github.com/ege-ayan/react-flask-starter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-500 hover:bg-red-700 p-3 rounded transition"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default App;
