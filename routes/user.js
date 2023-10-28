import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
  res.send('THis is from user.router');
});
export default router;
