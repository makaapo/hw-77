import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Message, MessageMutation} from './types';

const filename = './db.json';
let data: Message[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },
  async getMessages() {
    return data;
  },
  async addMessageToJson(message: MessageMutation) {
    const id = crypto.randomUUID();
    const newMessage = {...message, id}

    data.push(newMessage);
    await this.save();

    return newMessage;
  },
  async save() {
    return fs.writeFile(filename, JSON.stringify(data, null, 2));
  },
};

export default fileDb;