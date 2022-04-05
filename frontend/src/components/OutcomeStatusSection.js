import React form 'react';
import BarChart from "./BarChart";
//import {Data} 

function OutcomeStautsSection() {

    const [outcomeData, setOutcomeData] = useState({
        labels: ["0-14", "15-25", "25-64", "64 +"],
        datasets: [{
            label: "Outcome Data of Suspects and Victums",
            //data: Data.map(data() => data.)
        }]
    })

    return (
        <div className ="OutcomeStatusSection">
            <div style={{width:700}}>
                <BarChart chartdata={}/>
            </div>
        </div>
    )
}