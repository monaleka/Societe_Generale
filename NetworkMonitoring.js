// components/NetworkMonitoring.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const NetworkMonitoring = () => {
  const [networkData, setNetworkData] = useState([]);

  useEffect(() => {
    fetchNetworkData();
  }, []);

  const fetchNetworkData = async () => {
    try {
      const response = await axios.get('/api/network-data');
      setNetworkData(response.data);
    } catch (error) {
      console.error('Error fetching network data:', error);
    }
  };

  const chartData = {
    labels: networkData.map(data => data.timestamp),
    datasets: [
      {
        label: 'Network Traffic',
        data: networkData.map(data => data.traffic),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h1>Network Monitoring</h1>
      <Line data={chartData} />
    </div>
  );
};

export default NetworkMonitoring;
