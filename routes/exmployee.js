import express from 'express';
const router = express.Router();
// Method POST,GET,PUT,DELETE
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('THis is from employee.router');
});
router.get('/', (req, res) => {
  console.log(req.query);
  let queries = req.query;
  console.log(queries.class);
  res.send('THis is from name employee router ' + queries.class);
});
export default router;
