import React from 'react'
import { useState } from 'react'


const Work = () => {
    let name = "bola"
    let obj1
    // const [username, setusername] = useState("lola")
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const[userarray, setuserarray]=useState([])

    const handleclick = () => {
        let userdetail = [{
            username: input1,
            email: input2
        }]
        console.log(userdetail);
        setuserarray([...userarray, userdetail])
        console.log(userarray);
        
    }


    return (
        <>
            <input onChange={(e) => setinput1(e.target.value)} type="text" />
            <input onChange={(e) => setinput2(e.target.value)} type="text" />
            <button onClick={handleclick}>Click</button>

            {userarray.map((user)=>(
                <>
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
                </>
            ))}
        </>
    )
}

export default Work
