import ConditionIcon from "./ConditionIcon";
import TempIcon from "./TempIcon";

const Temperature = ({ result , toCent}) => {

    return (
        <>
          <div className="temperature-div">
               <ConditionIcon resultIcon={result[0].weather[0].icon} />
               <span id="temperature">{ toCent(result[0].main.temp).toFixed(1) }</span>
              <TempIcon />
          </div>
        </>
    );
}

export default Temperature;