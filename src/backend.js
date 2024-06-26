const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8001;
app.use(bodyParser.json());
app.use(cors());

app.get('/getHashrate', (req, res) => {
  res.json({ hashrate });
});

const MAX_PROGRESS = 100;



function simulateCoinCollection(duration=120000) {
    return new Promise((resolve) => {
      let progress = 0;
      const startTime = Date.now();
      
      const intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        // Simulate difficulty by checking if a certain number of leading zeros exist
        if (progress!==MAX_PROGRESS) {
            progress = Math.min(Math.floor(elapsedTime / duration * 100), MAX_PROGRESS);
        
          if (progress === MAX_PROGRESS) {
            clearInterval(intervalId);
            resolve(`Collected ${progress}% of coins!`);
          }
        }
      }, 1000); // Adjust interval for simulation speed
    });
  }


  app.post(`/start-collecting`, async (req, res) => {
    try {
     
      const result = await simulateCoinCollection();
      
      res.json({ message: result });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error: Coin collection failed' });
    }
  });

  app.post('/claim-token', async (req, res) => {
    try {
     
        const result = await simulateCoinCollection();
        
        res.json({ message: result });
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error: Coin collection failed' });
      }
  })
 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
