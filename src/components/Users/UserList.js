import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/userService.js"

export const UserList = () => {
    const [users, setUsers] = useState([])


    useEffect(()  => {
        getAllUsers().then(usersArray => {
            setUsers(usersArray)
        })
    }, [])

    
}