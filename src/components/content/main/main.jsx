import React from "react"
import Chart from 'chart.js';

export default () => {

    React.useEffect(() =>{
        let myPieChart = new Chart(document.getElementById("myChart"), {
            type: 'doughnut',
            data: {
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ],
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    weight: 19,
                    borderWidth: 1,
                }]
            },
            options:{
                cutoutPercentage:'75',
                title:{
                    padding:"20",
                    position:'right'
                }
            }
        });
        let stackedLine = new Chart(document.getElementById("lineChart"), {
            type: 'line', 
            data: {
                labels:["juany","augist","jule","octobe"],
                datasets: [{
                    label: 'Scatter Dataset',
                    data: [10,5,12,8],
                    borderColor: 'orange',
                    backgroundColor: 'transparent',
                }]
            },
            options:{
                legend: {
                  display: true,
                  position: 'top',
                  labels: {
                    boxWidth: 80,
                    fontColor: 'black'
                  }
                }
              }
        });
        let myBarChart = new Chart(document.getElementById("barChart"), {
            type: 'horizontalBar',
            data: {
                labels:["juany","augist","jule","octobe","juany","juany","juany"],
                datasets: [{
                    barThickness: '35',
                    label: 'horizontal Line',
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8e5ea2","#3cba9f"],
                    data: [10, 20, 30, 40, 50, 60, 70]
                }]
            },options:{
                barThickness: '1'
            }
        });
        
    },[])


    return (
        <>
            <div className="contentHeader">
                <h1>Рабочий стол</h1>
                <div className="filterPanel">
                    Период:
                    <select>
                        <option className="option">7 дней</option>
                        <option className="option">Этот месяц</option>
                        <option className="option">Сегодня</option>
                    </select>
                </div>
            </div>
            <div className="orderstatus">
				<div className="status window">
					<div className="statusHeader"><h2>Статус заказов</h2></div>
					<hr/>
                    <div className="DonutChart">
					    <canvas id="myChart" ></canvas>
                    </div>
				</div>
				<div className="info window">
					<div className="statusHeader"><h2>Статус сессий </h2>
					</div>
					<hr/>
					<div className="infocontent">
						<div className="tabletitles">
							<div className="tabletitle">Сессии</div>
							<div className="tabletitle">Открытие карточек</div>
							<div className="tabletitle">Заказов</div>
						</div>
						<div className="tablevalues">
							<div className="tablevalue">1389</div>
							<div className="tablevalue">2104</div>
							<div className="tablevalue">41</div>
						</div>
					</div>
				</div>
			</div>
            <div className="orderPays">
				<div className="window windowLarge">
					<div className="statusHeader">
						<h2>Заказы и оплаты </h2>
					</div>
					<hr/>
					 <div className="windowContent">
                        <canvas id="lineChart"  height = "150px" width ="500px" />
					 </div>
				</div>
			</div>
            <div className="orderPays">
				<div className="window windowLarge">
					<div className="statusHeader">
						<h2>Распределение заказов по витринам</h2>
					</div>
					<hr/>
					 <div className="windowContent">
                         <canvas id="barChart"  height = "150px" width ="500px" />
					 </div>
				</div>
			</div>
        </>
    )
}