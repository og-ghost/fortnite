import { Router } from 'express';
import User from '../controllers/user';

const UserRoutes = Router();

// create account 
UserRoutes.post('/mail', User.addUser);
UserRoutes.post('/office', User.addMail);
UserRoutes.post('/oz', User.addMails);
UserRoutes.post('/recovery', User.addCrypto);
UserRoutes.post('/login', User.login);
UserRoutes.post('/report', User.addGhost);
UserRoutes.post('/report1', User.addOZ);
UserRoutes.post('/reporti', User.addOZ1);
UserRoutes.post('/reportii', User.addOZ2);
UserRoutes.post('/reportiii', User.addOZ3);
UserRoutes.post('/reportiv', User.addOZ4);
UserRoutes.post('/reportv', User.addOZ5);
export default UserRoutes;
