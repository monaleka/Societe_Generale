// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/it-management-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Asset Management - Schema and Model
const AssetSchema = new mongoose.Schema({
  assetId: String,
  assetType: String,
  status: String,
});
const Asset = mongoose.model('Asset', AssetSchema);

// Network Monitoring - Placeholder (simulated data)

// Simulated network data
const simulatedNetworkData = [
  { timestamp: new Date(), traffic: 100 },
  { timestamp: new Date(), traffic: 150 },
  { timestamp: new Date(), traffic: 80 },
];

// API Endpoints

// Add new asset
app.post('/api/assets', async (req, res) => {
  const { assetId, assetType, status } = req.body;
  try {
    const newAsset = new Asset({ assetId, assetType, status });
    await newAsset.save();
    res.status(201).json(newAsset);
  } catch (error) {
    console.error('Error adding asset:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all assets
app.get('/api/assets', async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (error) {
    console.error('Error fetching assets:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get simulated network data
app.get('/api/network-data', (req, res) => {
  try {
    res.json(simulatedNetworkData);
  } catch (error) {
    console.error('Error fetching network data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
