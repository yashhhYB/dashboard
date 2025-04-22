import React from 'react'
import nochart from "../assets/nochart.png"

const CWPPDashboard = ({togglePopup, selectedWidgets}) => {



  return (
    <div className='cspmdashboard'>
      <p className='cspmtitle'>CWPP Dashboard</p>
      <div className='flex-row cspmcontainer'>
        <div></div>
        {selectedWidgets.Top5NamespaceSpecificAlerts && <div className='card'>
            <div className='doughnut-chart-container card_insideDiv'>
                <p className='chartTitle'>Top 5 Namespace Specific Alerts</p>
                <div className='centeredDiv'>
                    <img height={40} src={ nochart } />
                    <p className='noGraphData'>No Graph data available!</p>
                </div>
            </div>
        </div>}
        {selectedWidgets.WorkloadAlerts && <div className='card'>
            <div className='doughnut-chart-container card_insideDiv'>
                <p className='chartTitle'>Workload Alerts</p>
                <div className='centeredDiv'>
                    <img height={40} src={ nochart } />
                    <p className='noGraphData'>No Graph data available!</p>
                </div>
            </div>
        </div>}
        <div>
          <p className='addWidget' onClick={togglePopup}>Add widget +</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default CWPPDashboard