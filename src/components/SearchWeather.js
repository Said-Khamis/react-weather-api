
import { debounce } from 'lodash';

const SearchWeather = ({onSearchWeather}) => {
    return <div className="search_weather">
       <input 
          onChange={ debounce((e) => { onSearchWeather(e.target.value) }, 1000)}
          id="seachWeather"
          type="text"
          placeholder="Seach City" />
    </div>;
 }
 
 export default SearchWeather;