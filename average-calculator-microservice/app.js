import('node-fetch')
  .then(fetchModule => {
    const fetch = fetchModule.default;
    const express = require('express');

    const router = express.Router();

    router.get('/numbers/:numberid', async (req, res) => {
      const { numberid } = req.params;

      try {
        const response = await fetch(`http://20.244.56.144/test/${numberid}`);
        const data = await response.json();
        
        const numbers = data.numbers;
        res.json({ numbers });
      } catch (error) {
        console.error('Error fetching numbers:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    module.exports = router;
  })
  .catch(error => {
    console.error('Error importing node-fetch:', error);
  });
