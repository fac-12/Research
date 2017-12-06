const router = (req, res) => {
  if(req.url === '/') {
    res.writeHead(200);
    res.end('HTTPS IS WORKING!!!!')
  }
};

module.exports = router;
