import express from 'express';
import userRouter from './routes/user.js';
import employeeRouter from './routes/exmployee.js';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
// base path
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', employeeRouter);
app.use('/', (req, res) => {
  const res = fetch('dummyap.com', { username: 'p-dipen', password: 'dipen' });
});
// app.use('/user', userRouter);
app.use(function (req, res, next) {
  console.log(req.url);
  req.query.newParam = 'asdasd';
  next();
});
app.get(
  '/user/:id',
  (req, res, next) => {
    // <- 1st middleware
    console.log('this is coming from first middleware');
    // if the user id is 0, skip to next route
    if (req.params.id === '0') {
      next('route'); // GO to next route available and fulfilling the condition of path
    } else next(); // Otherwise pass the control to next middleware in this stack
  },
  (req, res, next) => {
    // <- 2nd middleware
    console.log('this is coming from second middleware');
    next(err);
    res.send('regular');
  },
);
app.get('/user/:id', (req, res) => {
  res.send('Special');
});
app.get('/', (req, res) => {
  throw new Error('BROKEN');
});
app.get('/wiki', (req, res) => {
  res.status(404).send('wiki home page');
});
app.get('/all-request-type/:name/create', (req, res) => {
  console.log(req.keys);
  res.status(200).send('All request type are coming from ' + req.params.name);
});
app.use((err, req, res, next) => {
  console.log('THis is error middleware');
  console.log(err);
});
app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});
