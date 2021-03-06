import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from "react-chartjs-2";

function HomePage() {
 
    const [ chartData, setChartData ] = useState({
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#fd1974',
                '#a9fd19',
                '#cf19fd'
            ],
        }
    ],

    labels: []
});
        
useEffect(() => { 
    axios.get('http://localhost:3000/budget').then(function(res)
    {
        console.log(res);
        let data = [];
        let labels = [];
        let datasets = [];
    for(var i = 0; i < res.data.myBudget.length; i++) {
        datasets[0].data[i] = res.data.myBudget[i].budget;
        labels[i] = res.data.myBudget[i].title;
    }setChartData(data);
     
    }
    
    )
    
    
}, [] );

    
  return (
    <article className="container center">

    <div className="page-area">

        <div class="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div class="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </div>

        <div class="text-box">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </div>

        <div class="text-box">
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </div>

        <div class="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div class="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </div>

        <div class="text-box">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </div>

        <div class="text-box">
            <h1>Chart</h1>
            <Pie data={chartData} width={350} height={350}/>
        </div>

    </div>

</article>
  );

  
}


export default HomePage;
