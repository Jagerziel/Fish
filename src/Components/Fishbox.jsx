import './Fishbox.css'
import { useEffect , useState } from 'react'

//Build Navbar Component
function FishBox() {
    const [ data , setData ] = useState([])
    // //Assign Variables
    function twelveRandomFish () {
        let fishArr = []
        for (let i = 0; i < 12; i++) {
            fishArr.push(Math.floor(Math.random() * 12))
        }
        return fishArr
    } 
// console.log(fishArr())


    useEffect(() => {
        fetch(`https://projecttwoapi-production.up.railway.app/api/fish`)
        .then(res => res.json())
        .then(data => setData(data))
    }, []);      
    console.log(data)
    

    return (   
        <>
            <div className='FishBox'>
                <ul className='FishList'>
                    {data.map((item, index) => {
                        return (
                            <li key={index} className='FishListItem'>
                                <p>{item["Species Name"]}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}
//Export Component
export default FishBox