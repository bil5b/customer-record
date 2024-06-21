import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    kameezLength: {
        type: String,
        required: true
    },
    chest: {
        type: String,
        required: true
    },
    waist: {
        type: String,
        required: true
    },
    gheer: {
        type: String,
        required: true
    },
    sleeves: {
        type: String,
        required: true
    },
    bottom: {
        type: String,
    },
    shalwarLength: {
        type: String
    }
})

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;