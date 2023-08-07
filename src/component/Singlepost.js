import { useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"


function Singlepost() {
  const navigate = useNavigate()
  const obj = [
    { id: 1, name: "akash", city: "bhopal" },
    { id: 2, name: "abhisek", city: "kolar" },
    { id: 3, name: "ashish", city: "jabalpur" }
  ]


  const [data, setData] = useState("")

  const { id } = useParams();
  return (
    <div>{obj.map((item, index) =>
      <li key={index} >
      <button onClick={() => {
        navigate("/single/"+item.id)
        setData(item)
      }}>details
      </button>
<Link to={`/single/${item.id}`}>
<button>Click here</button></Link>
       </li>
    )}
      <div>{data.id} {data.name} {data.city}
         </div>
    </div>


  )
}

export default Singlepost