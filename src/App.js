import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState(null);

  return (
    <div className="App" style={{ textAlign: "start", padding: "20px" }}>
      <h2>Full Name Display</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const firstName = formData.get("firstName");
          const lastName = formData.get("lastName");
          setFullName(`${firstName} ${lastName}`);
        }}
      >
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
            required
            autoFocus
          />
        </label>
        <br />
        <br />
        <label>
          Last Name:&nbsp;
          <input
            type="text"
            name="lastName"
            style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
            required
          />
        </label>
        <br />
        <br />
        <button
          type="submit"
          style={{ padding: "5px 20px", marginTop: "10px" }}
        >
          Submit
        </button>
      </form>
      {fullName && (
        <div className="output">
          <p id="fullName">Full name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default App;
