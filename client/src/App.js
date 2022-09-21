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
      <div className={"flex flex-col items-center"}>
        <div className={"flex flex-col items-center"}>
          <form onSubmit={onSubmit} className="flex flex-col p-5 w-[450px]">
              <div className={"p-2 flex flex-row justify-between"}>
                  <label className={"m-2 font-semibold"}>Name:</label>
                  <input
                      name={"name"}
                      type={"text"}
                      value={form.name}
                      onChange={(e) => updateForm({ name: e.target.value })}
                      className={"w-[300px] border-2 border-gray-200 bg-gray-50 rounded-md shadow-sm p-1 m-1 hover:bg-gray-200"}
                  />
              </div>
              <div className={"p-2 flex flex-row justify-between"}>
                  <label className={"m-2 font-semibold"}>Email:</label>
                  <input
                      name={"email"}
                      type={"text"}
                      value={form.email}
                      onChange={(e) => updateForm({ email: e.target.value })}
                      className={"w-[300px] border-2 border-gray-200 bg-gray-50 rounded-md shadow-sm p-1 m-1 hover:bg-gray-200"}
                  />
              </div>
              <div className={"p-2 flex flex-row justify-between"}>
                  <label className={"m-2 font-semibold"}>Phone:</label>
                  <input
                      name={"phone"}
                      type={"text"}
                      value={form.phone}
                      onChange={(e) => updateForm({ phone: e.target.value })}
                      className={"w-[300px] border-2 border-gray-200 bg-gray-50 rounded-md shadow-sm p-1 m-1 hover:bg-gray-200"}


                  />
              </div>
              <div className={"p-2 flex flex-row justify-center"}>
                  <label className={"m-2 font-semibold"}>Active?</label>
                  <input
                      name={"active"}
                      type={"checkbox"}
                      onChange={(e) => {
                          if(form.active) {
                              updateForm({active: false})
                          }
                          updateForm({active: true})
                      }}
                      className={"border-2 border-gray-200 bg-gray-50 rounded-full p-1 m-1 hover:bg-gray-200"}
                  />

              </div>
              <input
                  name="submit"
                  type={"submit"}
                  className={"w-[300px] self-center m-3 text-white font-bold bg-blue-500 rounded-full p-1 m-1 hover:bg-blue-300"}
              />
          </form>
        </div>
        <Users />
      </div>
  );
}

export default App;
