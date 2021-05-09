import * as React from 'react';
import '../App.css';
import Datatable from './datatable';
import Postform from './postform';

require("es6-promise").polyfill();
require("isomorphic-fetch");
const {useState} = React;


export default function Counter(){
		const [data] = useState([])
		const [counter, setCounter] = useState(0);
	return(
		<div className= "counters">
			{/* Increment and Decrement Counter */}
			<h1>Increment and Decrement Counter</h1>
				<button className="buttons btn" 
					onClick={() => {setCounter(counter + 1)	}}>
				+ Increase button
				</button>
				<input type="text" className="setValue" value={counter}></input>
				<button  className="buttons btn"  onClick={() => {setCounter(counter - 1)	}}>
				- Decrese button
				</button>
				<h1>Employee Form Data Table</h1>
				<div>
				{/* use for loading Table  */}
				<Datatable data={data} />
				{/* use for loading Add new form  */}
				<Postform/>
				</div>
				
		
		</div>
	);
}