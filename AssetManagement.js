// components/AssetManagement.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssetManagement = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const response = await axios.get('/api/assets');
      setAssets(response.data);
    } catch (error) {
      console.error('Error fetching assets:', error);
    }
  };

  return (
    <div>
      <h1>Asset Management</h1>
      <ul>
        {assets.map(asset => (
          <li key={asset._id}>
            {asset.assetId} - {asset.assetType} - {asset.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetManagement;
