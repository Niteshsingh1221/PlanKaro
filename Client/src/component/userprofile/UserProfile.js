import { useEffect, useState } from "react"

const UserProfile = () => {
    const [userprofile, setUserProfile] = useState({
        user_id: "",
        username: "",
        fullname: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        dateofbirth: ""
    })
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setUserProfile({
                user_id: user.user_id
                , username: user.username
                , fullname: user.fullname
                , email: user.email
                , password: user.password
                , gender: user.gender
                , phone: user.phone
                , dateofbirth: user.dateofbirth

            })
        }

    }

    )

    return (
        <div>
            <h1>user profile</h1>
            <div>
                <label>user id:</label>
                <input type="text" value={userprofile.user_id} disabled={true} />
            </div>
            <div>
                <label>username:</label>
                <input type="text" value={userprofile.username} disabled={true} />
            </div>
            <div>
                <label>fullname:</label>
                <input type="text" value={userprofile.fullname} disabled={true} />
            </div>
            <div>
                <label>email:</label>
                <input type="email" value={userprofile.email} disabled={true} />
            </div>
            <div>
                <label>password:</label>
                <input type="password" value={userprofile.password} disabled={true} />
            </div>
            <div>
                <label>gender:</label>
                <input type="text" value={userprofile.gender} disabled={true} />
            </div>
            <div>
                <label>phone:</label>
                <input type="text" value={userprofile.phone} disabled={true} />
            </div>
            <div>
                <label>date of birth:</label>
                <input type="date" value={userprofile.dateofbirth} disabled={true} />
            </div>


        </div>






    )

}

export default UserProfile;