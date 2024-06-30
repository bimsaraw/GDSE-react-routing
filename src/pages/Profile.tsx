import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserObject } from "../interfaces/user";

const Profile = () => {

    const { userId } = useParams();

    const [user, setUser] = useState<UserObject>();

    const getUser = async () => {
        const user = await axios.get(`https://reqres.in/api/users/${userId}`);
        
        if(user.status === 200) {
            setUser(user.data.data);
        }
    }

    useEffect(() => {
        //code to trigger as a side effect
        getUser();
    },[]) //dependency array
    
    return (
        <div>
            <h1>Profile</h1>
            <button onClick={getUser}>Get User</button>

            {user &&
                <div>
                    <img src={user.avatar} />
                    <h2>{user.first_name} {user.last_name}</h2>
                    <p>{user.email}</p>
                </div>
            }
        </div>
    )
}

export default Profile;