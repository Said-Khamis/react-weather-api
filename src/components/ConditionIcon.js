
const ConditionIcon = ({ resultIcon }) => {

    const icon = `https://openweathermap.org/img/wn/${resultIcon}@2x.png`;
    return (
        <div className="conditiionIcon">
            <img 
              alt="Condition"
              src={icon}
              width={50} height={50} />
        </div>
    );
}

export default ConditionIcon;