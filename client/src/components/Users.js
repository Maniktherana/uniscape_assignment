import { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`http://localhost:8080/user/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setUsers(records);
        }

        getUsers();
        console.log(users)

    }, [users.length]);
    return (
        <>
            {users && users.map((item) => {
                return (<p key={item._id}>{item.name}, {item.email}, {item.phone}, {item.active ? "Active" : "Not Active"}</p>)
            })}
        </>
    )
}

export default Users