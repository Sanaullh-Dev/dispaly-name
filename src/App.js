import "./App.css";

function App() {
  // You must make the input fields such that the user is unable to submit without filling in both the fields.
  return (
    <div className="App" style={{ textAlign: "start", padding: "20px" }}>
      <h2>Full Name Display</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const firstName = e.target.firstName.value;
          const lastName = e.target.lastName.value;
          document.getElementById(
            "fullName"
          ).innerText = `Full name: ${firstName} ${lastName}`;
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
      <div className="output">
        <p id="fullName">Full name: John Doe</p>
      </div>
    </div>
  );
}

export default App;
