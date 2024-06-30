import axios from "axios"
import { useEffect, useState } from "react";
import { UserObject } from "../interfaces/user";
import { Link } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState<[UserObject]>();

    const getUsers = async () => {
        const response = await axios.get("https://reqres.in/api/users");
        
        if(response.status === 200) {
            setUsers(response.data.data);
        }

    }

    useEffect(() => {
        getUsers();
    },[])

    return (
        <>
            <h1>Users</h1>

            {users && users.map((user) => (
                <div key={user.id}>
                    <img src={user.avatar} />
                    <Link to={`/profile/${user.id}`}>
                        {user.first_name} {user.last_name}
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Users;