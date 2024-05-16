import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

function StarshipInfo(){
    const {id} = useParams()
    const [ship, setShipsById] = useState(null)

    useEffect(() => {
        getStarShipsById()
    }, []);

    async function getStarShipsById(){
        try{
          const res = await fetch(`https://swapi.dev/api/starships/${id} `);
          if(!res.ok){
            throw new Error("Failed to grab by id")
          }
          const data = await res.json()
          setShipsById(data)
    
      } catch(err){
        console.log(err)
      }
      };




    return (
        <div>
            <header>{ship && ship.name}</header>
            <p>Crew: {ship?.crew}</p>
            <p>Cost: {ship?.cost_in_credits}</p>
        </div>
    )
}

export default StarshipInfo