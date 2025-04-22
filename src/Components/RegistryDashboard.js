import React, { useState } from 'react';

const RegistryDashboard = ({ data, togglePopup, selectedWidgets}) => {

  const totalVulnerabilities = data.TotalVulnerabilities;
  const ImageSecurityIssues = data.ImageSecurityIssues;
  const total = totalVulnerabilities.critical + totalVulnerabilities.High + totalVulnerabilities.modrate + totalVulnerabilities.low;
  const total2 = ImageSecurityIssues.critical + ImageSecurityIssues.High + ImageSecurityIssues.modrate + ImageSecurityIssues.low;

  const criticalPercentage = (totalVulnerabilities.critical / total) * 100;
  const highPercentage = (totalVulnerabilities.High / total) * 100;
  const moderatePercentage = (totalVulnerabilities.modrate / total) * 100;
  const lowPercentage = (totalVulnerabilities.low / total) * 100;

  const criticalPercentage2 = (ImageSecurityIssues.critical / total2) * 100;
  const highPercentage2 = (ImageSecurityIssues.High / total2) * 100;
  const moderatePercentage2 = (ImageSecurityIssues.modrate / total2) * 100;
  const lowPercentage2 = (ImageSecurityIssues.low / total2) * 100;
  console.log(lowPercentage2,"ssssssssssssssss");


  return (
    <div className='cspmdashboard'>
      <p className='cspmtitle'>Registry Scan</p>
      <div className='flex-row cspmcontainer'>
        <div></div>
        {selectedWidgets.ImageRiskAssessment && <div className='cardR'>
          <div className='doughnut-chart-container card_insideDiv'>
            <p className='chartTitle'>Image Risk Assessment</p>
            <p className='chartSubTitle'><spna className="chartSubTitlespan">{total}</spna> Total Vulnerabilities</p>
            <div className='centeredDiv bardiv'>
              <div className='progress-bar'>
                <div className='progress-segment critical' style={{ width: `${criticalPercentage}%` }}></div>
                <div className='progress-segment high' style={{ width: `${highPercentage}%` }}></div>
                <div className='progress-segment moderate' style={{ width: `${moderatePercentage}%` }}></div>
                <div className='progress-segment low' style={{ width: `${lowPercentage}%` }}></div>
                <div className='progress-segment empty' style={{ width: `10%` }}></div>
              </div>
            </div>
            <div className='centeredDivR'>
                <div className='flex-row small_div'>
                    <div className='flex-row'>
                        <div className='color_box1 color_div'></div>
                        <p>Critical({ totalVulnerabilities.critical })</p>
                    </div>
                    <div className='flex-row'>
                        <div className='color_box2 color_div'></div>
                        <p>High({ totalVulnerabilities.High })</p>
                    </div>
                </div>
                <div className='flex-row small_div'>
                    <div className='flex-row'>
                        <div className='color_box3 color_div'></div>
                        <p>Modrate({ totalVulnerabilities.modrate })</p>
                    </div>
                    <div className='flex-row'>
                        <div className='color_box4 color_div'></div>
                        <p>Low({ totalVulnerabilities.low })</p>
                    </div>
                </div>
            </div>
          </div>
        </div>}
        {selectedWidgets.ImageSecurityIssues && <div className='cardR'>
          <div className='doughnut-chart-container card_insideDiv'>
            <p className='chartTitle'>Image Security Issues</p>
            <p className='chartSubTitle'><spna className="chartSubTitlespan">{total2}</spna> Total Images</p>
            <div className='centeredDiv bardiv'>
            <div className='progress-bar'>
                <div className='progress-segment critical' style={{ width: `${criticalPercentage2}%` }}></div>
                <div className='progress-segment high' style={{ width: `${highPercentage2}%` }}></div>
                <div className='progress-segment moderate' style={{ width: `${moderatePercentage2}%` }}></div>
                <div className='progress-segment low' style={{ width: `${lowPercentage2}%` }}></div>
                <div className='progress-segment empty' style={{ width: `10%` }}></div>
              </div>
            </div>
            <div className='centeredDivR'>
                <div className='flex-row small_div'>
                    <div className='flex-row'>
                        <div className='color_box1 color_div'></div>
                        <p>Critical({ ImageSecurityIssues.critical })</p>
                    </div>
                    <div className='flex-row'>
                        <div className='color_box2 color_div'></div>
                        <p>High({ ImageSecurityIssues.High })</p>
                    </div>
                </div>
                <div className='flex-row small_div'>
                    <div className='flex-row'>
                        <div className='color_box3 color_div'></div>
                        <p>Modrate({ ImageSecurityIssues.modrate })</p>
                    </div>
                    <div className='flex-row'>
                        <div className='color_box4 color_div'></div>
                        <p>Low({ ImageSecurityIssues.low })</p>
                    </div>
                </div>
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

export default RegistryDashboard;
