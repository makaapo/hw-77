import express from 'express';
import fileDb from '../fileDb';
import {MessageMutation} from '../types';
import {imagesUpload} from '../multer';

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const messages = await fileDb.getMessages();
  return res.send(messages);
});

messagesRouter.post('/', imagesUpload.single('image'), async(req, res) => {
  if (!req.body.message) {
    res.status(400).send({error: "Message is request"});
  }

  let message: MessageMutation = {
    message: req.body.message,
    author: req.body.author ? req.body.author.trim() : 'Anonymous',
    image: req.file ? req.file.filename : null,
  };

  message = await fileDb.addMessageToJson(message);
  res.send(message);
});


export default messagesRouter;