
const FeelMessage = ({ result , toCent }) => {
    return <div className="feel_message">
        <span>It Feels like { toCent(result[0].main.feels_like).toFixed(1) }</span> 
        <span>{result[0].weather[0].main }</span>
    </div>;
 }
 
 export default FeelMessage;