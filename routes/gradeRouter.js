import express from 'express';
import controller from '../controllers/gradeController.js';

const app = express();

app.post('/grade/', controller.create); //Ok
app.get('/grade/', controller.findAll); //Ok
app.get('/grade/:id', controller.findOne);
app.put('/grade/:id', controller.update);
app.delete('/grade/:id', controller.remove);
app.delete('/grade/', controller.removeAll);

export { app as gradeRouter };
