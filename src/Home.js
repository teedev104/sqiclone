import { useState } from "react"

const Home = () => {
    let name = "Tola"
    const [username, setusername] = useState("lola")
    const[input1, setinput1]=useState("")
    console.log(input1);
    const handleclick = () => {
        name = "tolu"
        console.log(name);
        setusername("bolu")
    }
    return (
        <>
            <h1>{name}</h1>
            <p>{username}</p>
            <button onClick={() => handleclick(1, 3)}>Click</button>
            <input onChange ={(e)=>setinput1(e.target.value)} type="text" />

        </>

    )
}

export default Home