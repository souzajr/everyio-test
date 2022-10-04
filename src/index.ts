import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './config/routes/index.routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log('\x1b[41m\x1b[37m', `SERVER RUNNIG ON PORT ${port}`, '\x1b[0m')
);
