import { IoLocation } from "react-icons/io5";

const Location = ({result}) => {
    return <div className="location_weather">
        <IoLocation size={30} /> <h4>{result[0].name}</h4>
    </div>;
 }
 
 export default Location;