import mongoose from 'mongoose';

const mainTableSchema = new mongoose.Schema({
    name_table: {
        type: String,
        required: true,
        unique: true,
    },
    date_table: {
        type: String,
        required: true,
    },
    }
);

const mainTable = mongoose.model('mainTable', mainTableSchema);

export default mainTable;