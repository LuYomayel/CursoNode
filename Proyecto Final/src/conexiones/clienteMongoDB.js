import config from '../../config.json' assert {type: "json"};
import { MongoClient } from 'mongodb';

const cliente = new MongoClient(config.database.uri);

export default cliente;