import mongoose from 'mongoose';

const mainTableSchema = new mongoose.Schema({
    id_table: {
        type: Number,
        index: true,
        unique: true,
    },
    name_table: {
        type: String,
        required: true,
        unique: true,
    },
    date_table: {
        type: Date,
        required: true,
    },
    }, {timestamps: true}
);

const mainTable = mongoose.model('mainTable', mainTableSchema);

export default mainTable;