
import './App.css';
import {ReactiveBase,DataSearch} from '@appbaseio/reactivesearch';

function App() {
  return (
    <div className="App">
     <ReactiveBase app="wine" url="https://SRl6mJD2L:bd3e68cd-06e4-4336-af86-7c9890ddfe67@wine-data-xvryxsf-arc.searchbase.io">
     <DataSearch componentId="SearchSensor" dataField={['title','title.search','title.autosuggest','variety','variety.search','variety.autosuggest']}
     onValueSelected={(value,cause, source)=>{
       console.log('selected value',value);
       console.log('selected obj',source);
     } }
     
     />
     </ReactiveBase>
      
    </div>
  );
}

export default App;
