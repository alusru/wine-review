
import './App.css';
import {ReactiveBase,DataSearch, MultiList } from '@appbaseio/reactivesearch';

function App() {
  return (

    <div className="App">

<nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom"> <a className="navbar-brand ml-2 font-weight-bold" href="#"><span id="burgundy">The</span><span id="orange">Wine</span></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
    <div className="collapse navbar-collapse" id="navbarColor">
        <ul className="navbar-nav">
            <li className="nav-item rounded bg-light ">
            <ReactiveBase app="wine" url="https://SRl6mJD2L:bd3e68cd-06e4-4336-af86-7c9890ddfe67@wine-data-xvryxsf-arc.searchbase.io">
     <DataSearch componentId="SearchSensor" dataField={['title','title.search','title.autosuggest','variety','variety.search','variety.autosuggest']} fieldWeights={[3,1,1,3,1,1]} 
     onValueSelected={(value,cause, source)=>{
       console.log('selected value',value);
       console.log('selected obj',source);
     }
     
    }
     
     />
     </ReactiveBase>
              
              </li>
        </ul>
    </div>
</nav>

<section id="sidebar">
    <div className="border-bottom pb-2 ml-2">
        <h4 id="burgundy">Filters</h4>
    </div>
    <div className="py-2 border-bottom ml-3">
        
        <div id="orange"><span className="fa fa-minus"></span></div>
        <ReactiveBase app="wine" url="https://SRl6mJD2L:bd3e68cd-06e4-4336-af86-7c9890ddfe67@wine-data-xvryxsf-arc.searchbase.io">
            <MultiList componentId="VarietySensor" dataField="variety.keyword" />
        </ReactiveBase>
    </div>
</section>


     
      
    </div>
  );
}

export default App;
