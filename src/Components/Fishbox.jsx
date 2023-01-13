import './FishBox.css'

import './DataDL.css'


//Build Navbar Component
function FishBox() {
    // //Assign Variables
    function twelveRandomFish () {
        let fishArr = []
        for (let i = 0; i < 12; i++) {
            fishArr.push(Math.floor(Math.random() * 12))
        }
        return fishArr
    } 
    console.log(fishArr())


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
                    {data.map()}
                </ul>
            </div>
        </>
    );
}
//Export Component
export default FishBox