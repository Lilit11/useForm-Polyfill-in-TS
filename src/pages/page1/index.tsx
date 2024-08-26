import { Link } from "react-router-dom"

export const Page1 =()=>{
    return<>
    <h1>Page1</h1>
    <Link to={'/page'}> page2</Link>
    </>
}