export default async function handler(req, res) {
    const { url } = req.query;
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.ok) {
        res.status(200).json(data.result);
      } else {
        res.status(400).json({ error: 'Failed to shorten URL' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }