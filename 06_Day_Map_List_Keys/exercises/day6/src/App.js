import './App.css';
import {tenHighestPopulation} from './ten_most_highest_populations.js'


function App() {
  const GridItem = (props) => {
  let color = 'yellow';

  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
  }

  if(props.index % 2 === 0) 
  {
    color = 'green';
  }

  if(isPrime(props.index)){
    color = 'red'
  }


  return (
    <div className='grid-item' style={{ height:'50px' , backgroundColor:color}}>
    {props.index}
    </div>
  )
  }

  const Population = ({country, count}) => {
    const width = count / 10000000;
    return (
      <div style={{display:"flex", flexDirection: "row", margin: "10px"}}>
        <div style={{width: '500px'}}>{country}</div>
        <div style={{width: width, backgroundColor: 'orange', marginRight: '20px'}}></div>
        <div>{count}</div>
      </div>
    ) 
  }

  const gridItems = [];
  for (let i = 0; i < 32; i++){
   gridItems.push(<GridItem key={i} index={i} />);
  }

  const populationGraph = [];
  for (const {country, population} of tenHighestPopulation){
    populationGraph.push(<Population country={country} count={population} key={country} />) 
  }

  return (
    <div className="App">
      <header>30 Days of React</header>
      <div id='grid-parent'>
    {gridItems} 
    </div>

    <h2>World Populations</h2>
    {populationGraph}
    </div>
  );
}

export default App;
