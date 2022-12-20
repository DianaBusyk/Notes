import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdition, setIsEdition] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <section className="section-center">
      <form className="notes-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <div className="form-control">
          <input
            type="text"
            className="notes"
            placeholder="enter your note..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEdition ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="notes-container">
        <List />
        <button className="clear-btn">clear item</button>
      </div>
    </section>
  );
}

export default App;
