import { useParams } from "react-router";
import { Link } from 'react-router-dom'

const DisplayResult = () => {
    const { category, id } = useParams();
    const [data, setData] = useState([])         // Save the getted data from useEffect before show it in the page

    // The use Effect we works when the user change on category or id
    // It wil get the data and save them in the newData state 
    useEffect(() => {
        axios.get('https://swapi.dev/api/' + category + '/' + id)
            .then(response => {
                setData(response.data)
            })
            .catch(response => {
                setData({ Error: "These aren't the droids you're looking for " })
            })
    }, [category, id]);
    return (
        <>
            {/* Display the object keys and values */}
            <ul className="list-group">
                {data && Object.entries(data).length > 0 &&
                    Object.entries(data).slice(0, 4).map(([key, value]) => (
                        key === "homeworld" ? (
                            <Link to={value} key={key}>homeworld</Link>
                        ) : (
                            <li key={key} className="list-group-item">
                                {key} = {value}
                            </li>
                        )
                    ))
                }
            </ul>
        </>
    )
}

export default DisplayResult