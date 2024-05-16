import { useNavigate } from "react-router-dom";


function StarshipsCard({ship, url}){
    const navigate = useNavigate();
    const handleNav = () => {
        const index = url.split('/');
        navigate(`/ships/${index[5]}`)
    }
    return (
      <div className="card" onClick={handleNav}>
        {ship.name}
      </div>
    )
}


export default StarshipsCard;