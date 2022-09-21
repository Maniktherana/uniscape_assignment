import { useState, useEffect } from "react";

import Users from "./components/Users";

import './App.css';

function App() {
    const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      active: false,
    });


    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };

        await fetch("http://localhost:8080/user/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ name: "", email: "", phone: "", active: false });
    }

    // Update state properties
    function updateForm(value) {
      return setForm((prev) => {
        return { ...prev, ...value };
      });
    }

    return (
      <>
        <div className="App">
          <form onSubmit={onSubmit}>
            <label>
              Name:
              <input
                  name={"name"}
                  type={"text"}
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
              />
            </label>
            <label>
              email:
              <input
                  name={"email"}
                  type={"text"}
                  value={form.email}
                  onChange={(e) => updateForm({ email: e.target.value })}
              />
            </label>
            <label>
              Phone:
              <input
                  name={"phone"}
                  type={"text"}
                  value={form.phone}
                  onChange={(e) => updateForm({ phone: e.target.value })}
              />
            </label>
            <label>
              Active?
              <input
                  name={"active"}
                  type={"checkbox"}
                  onChange={(e) => {
                    if(form.active) {
                      updateForm({active: false})
                    }
                    updateForm({active: true})
                  }}
              />
            </label>
            <input
                name="submit"
                type={"submit"}
            />
          </form>
        </div>
        <Users />
      </>
  );
}

export default App;
