import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const CSPMDashboard = ({data, togglePopup, selectedWidgets}) => {

const totalValue = data.CloudAccountRikAssessment.Failed + data.CloudAccountRikAssessment.Warning + data.CloudAccountRikAssessment.NotAvailable + data.CloudAccountRikAssessment.Passed;
const totalConectionValue = data.CloudAccounts.Connected + data.CloudAccounts.NotConnected;

  const doughnutData = {
    labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
    datasets: [
      {
        data: [
          data.CloudAccountRikAssessment.Failed,
          data.CloudAccountRikAssessment.Warning,
          data.CloudAccountRikAssessment.NotAvailable,
          data.CloudAccountRikAssessment.Passed,
        ],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData2 = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        data: [
          data.CloudAccounts.Connected,
          data.CloudAccounts.NotConnected,
        ],
        backgroundColor: ['#FF6384', 'grey'],
        hoverBackgroundColor: ['#FF6384', 'grey'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right', 
        labels: {
          boxWidth: 20, 
          padding: 15, 
        }
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.formattedValue}`;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const plugins = [{
    id: 'text',
    beforeDraw: function(chart) {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;
      ctx.restore();
      
      // First Line (Total Value)
      const fontSize1 = 1.2; // Adjusted font size
      ctx.font = `${fontSize1}em sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fontWeight = 'bold'; // Make text bold
      const totalValueText = totalValue.toString();
      const textX = Math.round((width - ctx.measureText(totalValueText).width) / 2);
      const textY = height / 2 - 10; // Adjusting for the first line
      ctx.fillText(totalValueText, textX-60, textY+5);
  
      // Second Line (Total)
      const fontSize2 = 0.8; // Adjusted font size
      ctx.font = `${fontSize2}em sans-serif`;
      ctx.fontWeight = 'bold'; // Make text bold
      const label = "Total";
      const labelX = Math.round((width - ctx.measureText(label).width) / 2);
      const labelY = height / 2 + 15; 
      ctx.fillText(label, labelX -60, labelY-4);
      
      ctx.save();
    }
  }];



  const options1 = {
    plugins: {
      legend: {
        position: 'right', 
        labels: {
          boxWidth: 20, 
          padding: 15, 
        }
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.formattedValue}`;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const plugins1 = [{
    id: 'text',
    beforeDraw: function(chart) {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;
      ctx.restore();
      
      // First Line (Total Value)
      const fontSize1 = 1.2; // Adjusted font size
      ctx.font = `${fontSize1}em sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fontWeight = 'bold'; // Make text bold
      const totalValueText = totalConectionValue.toString();
      const textX = Math.round((width - ctx.measureText(totalValueText).width) / 2);
      const textY = height / 2 - 10; // Adjusting for the first line
      ctx.fillText(totalValueText, textX-65, textY+5);
  
      // Second Line (Total)
      const fontSize2 = 0.8; // Adjusted font size
      ctx.font = `${fontSize2}em sans-serif`;
      ctx.fontWeight = 'bold'; // Make text bold
      const label = "Total";
      const labelX = Math.round((width - ctx.measureText(label).width) / 2);
      const labelY = height / 2 + 15; 
      ctx.fillText(label, labelX -65, labelY-4);
      
      ctx.save();
    }
  }];


  return (
    <div className='cspmdashboard'>
      <p className='cspmtitle'>CSPM Executive Dashboard</p>
      <div className='flex-row cspmcontainer'>
        <div></div>
        {selectedWidgets.CloudAccounts && <div className='card'>
            <div className='doughnut-chart-container card_insideDiv'>
                <p className='chartTitle'>Cloud Acounts</p>
                <Doughnut className='Dchart' data={doughnutData2} options={options1} plugins={plugins1} />
            </div>
        </div>}
        {selectedWidgets.CloudAccountRiskAssessment && <div className='card'>
            <div className='doughnut-chart-container card_insideDiv'>
                <p className='chartTitle'>Cloud Acount Risk Assessment</p>
                <Doughnut className='Dchart' data={doughnutData} options={options} plugins={plugins} />
            </div>
        </div>}
        <div>
          <p className='addWidget' onClick={togglePopup}>Add widget +</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CSPMDashboard;
