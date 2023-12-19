import { MdSpeed } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineDateRange } from "react-icons/md";

const OtherConditions = ({result}) => {
    return <footer>
         <div className="extra-details">
            <div className="item">
          
                <div style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center'
                }}>
                    <MdSpeed size={20} />
                 Wind Speed
                </div>
                <span>{result[0].wind.speed} m/s</span>
            </div>
            <div className="item">
          
                <div style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center'
                }}>
                    <WiHumidity size={20} />
                 Humidity
                </div>
                <span>{result[0].main.humidity} %</span>
            </div>
            <div className="item">
          
                <div style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'space-between'
                }}>
                    <MdOutlineDateRange size={20} />
                    <span>Date</span>  
                </div>
                <span>{
                    new Date().toLocaleDateString()      
                }</span>
            </div>
         </div>
    </footer>;
 }
 
 export default OtherConditions;