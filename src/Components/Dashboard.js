import React, { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CSPMDashboard from './CSPMDashboard';
import CWPPDashboard from './CWPPDashboard';
import RegistryDashboard from './RegistryDashboard';

const Dashboard = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    const [activeTab, setActiveTab] = useState('Tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [selectedWidgets, setSelectedWidgets] = useState({
        CloudAccounts: true,
        CloudAccountRiskAssessment: true,
        Top5NamespaceSpecificAlerts: true,
        WorkloadAlerts: true,
        ImageRiskAssessment: true,
        ImageSecurityIssues: true,
    });

    const [selectedWidgets2, setSelectedWidgets2] = useState({
        CSPMDashboard: true,
        CWPPDashboard: true,
        RegistryDashboard: true,
    });


    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const togglePopup2 = () => {
        setShowPopup2(!showPopup2);
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setSelectedWidgets((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleCheckboxChange2 = (e) => {
        const { name, checked } = e.target;
        setSelectedWidgets2((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleConfirm = () => {
        setShowPopup(false);
    };
    const handleConfirm2 = () => {
        setShowPopup2(false);
    };

    const data = {
        CloudAccounts: {
            Connected: 4,
            NotConnected: 2,
        },
        CloudAccountRikAssessment: {
            Failed: 1689,
            Warning: 681,
            NotAvailable: 36,
            Passed: 7253,
        },
        TotalVulnerabilities: {
            critical: 30,
            High: 150,
            modrate: 400,
            low: 260,
        },
        ImageSecurityIssues: {
            critical: 3,
            High: 7,
            modrate: 8,
            low: 11,
        },
    };

    return (
        <div className={`dashboard ${showPopup || showPopup2 ? 'blur-background' : ''}`}>
            <div className='dashboard_title flex-row'>
                <div>
                    <p className='Cnapp_dash'>CNAPP Dashboard</p>
                </div>
                <div className='flex-row DashboardIcons'>
                    <p className='addWidget' onClick={togglePopup2}>Add widget +</p>
                    <RefreshIcon className='refresh-icon' />
                    <MoreVertIcon className='menu-icon' />
                    <div className='flex-row past2days'>
                        <AccessTimeIcon className='clock-icon' />
                        <div className='vertical-line'></div>
                        <form action="">
                            <select name="workspace" className="custom-select">
                                <option value="volvo">Past 2 days</option>
                                <option value="saab">Past 4 days</option>
                                <option value="opel">Past 6 days</option>
                                <option value="audi">Past 7 days</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>

            {selectedWidgets2.CSPMDashboard && <CSPMDashboard data={data} togglePopup={togglePopup} selectedWidgets={ selectedWidgets }/>}
            {selectedWidgets2.CWPPDashboard && <CWPPDashboard togglePopup={togglePopup} selectedWidgets={ selectedWidgets } />}
            {selectedWidgets2.RegistryDashboard && <RegistryDashboard data={data} togglePopup={togglePopup} selectedWidgets={ selectedWidgets } />}

            {showPopup && (
                <>
                    <div className='overlay'></div>
                    <div className='popup'>
                    <div className='popup-content flex-column'>
                            <div>
                                <div className='widgetHeader flex-row'>
                                    <p className='widgetHeaderTitle'>Add widget</p>
                                    <p className='crossBtn' onClick={togglePopup}>X</p>
                                </div>
                                <p className='widgetSubtitle'>Personalize your dashboard by adding the following widgets</p>
                                
                                
                                <div className="tabs-container">
                                    <div className="tabs-menu">
                                        <div
                                            className={`tab-item ${activeTab === 'Tab1' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('Tab1')}
                                        >
                                            CSPM
                                        </div>
                                        <div
                                            className={`tab-item ${activeTab === 'Tab2' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('Tab2')}
                                        >
                                            CWPP
                                        </div>
                                        <div
                                            className={`tab-item ${activeTab === 'Tab3' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('Tab3')}
                                        >
                                            Registry Scan
                                        </div>
                                    </div>

                                    <div className="tabs-content">
                                        {activeTab === 'Tab1' && <div>
                                            <div className='checkboxContainer'>
                                                <label className="container">Cloud Accounts
                                                    <input type="checkbox" name="CloudAccounts" checked={selectedWidgets.CloudAccounts} onChange={handleCheckboxChange} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="container">Cloud Account Risk Assessment
                                                    <input type="checkbox" name="CloudAccountRiskAssessment" checked={selectedWidgets.CloudAccountRiskAssessment} onChange={handleCheckboxChange} />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            </div>}
                                        {activeTab === 'Tab2' && <div>
                                            <div className='checkboxContainer'>
                                                <label className="container">Top 5 Name Specific Alerts
                                                    <input type="checkbox" name="Top5NamespaceSpecificAlerts" checked={selectedWidgets.Top5NamespaceSpecificAlerts} onChange={handleCheckboxChange} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="container">Workload Alerts
                                                    <input type="checkbox" name="WorkloadAlerts" checked={selectedWidgets.WorkloadAlerts} onChange={handleCheckboxChange} />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            </div>}
                                        {activeTab === 'Tab3' && <div>
                                            <div className='checkboxContainer'>
                                                <label className="container">Image Risk Assessment
                                                    <input type="checkbox" name="ImageRiskAssessment" checked={selectedWidgets.ImageRiskAssessment} onChange={handleCheckboxChange} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="container">Image Security Issues
                                                    <input type="checkbox" name="ImageSecurityIssues" checked={selectedWidgets.ImageSecurityIssues} onChange={handleCheckboxChange} />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            </div>}
                                    </div>
                                </div>

                            </div>
                            <div className='widgetBtn'>
                                <button className='cancelBtn' onClick={togglePopup}>Cancel</button>
                                <button className='confirmBtn' onClick={handleConfirm}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {showPopup2 && (
                <>
                    <div className='overlay'></div>
                    <div className='popup'>
                        <div className='popup-content flex-column'>
                            <div>
                                <div className='widgetHeader flex-row'>
                                    <p className='widgetHeaderTitle'>Add widget</p>
                                    <p className='crossBtn' onClick={togglePopup2}>X</p>
                                </div>
                                <p className='widgetSubtitle'>Personalize your dashboard by adding the following widgets</p>
                                <div className='checkboxContainer'>
                                    <label className="container">CSPM Executive Dashboard
                                        <input type="checkbox" name="CSPMDashboard" checked={selectedWidgets2.CSPMDashboard} onChange={handleCheckboxChange2} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">CWPP Dashboard
                                        <input type="checkbox" name="CWPPDashboard" checked={selectedWidgets2.CWPPDashboard} onChange={handleCheckboxChange2} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">Registry Scan
                                        <input type="checkbox" name="RegistryDashboard" checked={selectedWidgets2.RegistryDashboard} onChange={handleCheckboxChange2} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className='widgetBtn'>
                                <button className='cancelBtn' onClick={togglePopup2}>Cancel</button>
                                <button className='confirmBtn' onClick={handleConfirm2}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Dashboard;
