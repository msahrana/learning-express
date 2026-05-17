import express, {
    type Application,
    type Request,
    type Response,
} from 'express';
import { pool } from './db';
import { userRoute } from './modules/user/user.route';
import { profileRoute } from './modules/profile/profile.route';

const app: Application = express();

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/profile', profileRoute)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Welcome Our Express Server',
        author: 'Next Level',
    });
});

export default app;
