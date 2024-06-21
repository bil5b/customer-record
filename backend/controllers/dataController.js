import asyncHandler from 'express-async-handler';
import Customer from '../models/customerModel.js';

// @desc    Save new customer data
// route    POST /api/customers

const saveCustomer = asyncHandler (async (req, res) => {
    const {
        name, phone,
        kameezLength, chest,
        waist, gheer,
        sleeves, bottom, shalwarLength
    } = req.body;

    const customerExists = await Customer.findOne({ phone });
    if (customerExists) {
        res.status(400);
        throw new Error('Customer already exists');
    }

    const customer = await Customer.create({
        name, phone,
        kameezLength, chest,
        waist, gheer,
        sleeves, bottom, shalwarLength
    })

    if (customer) {
        res.status(201).json({
            _id: customer._id,
            name: customer.name,
            phone: customer.phone,
            kameezLength: customer.kameezLength,
            chest: customer.chest,
            waist: customer.waist, 
            gheer: customer.gheer,
            sleeves: customer.sleeves, 
            bottom: customer.bottom, 
            shalwarLength: customer.shalwarLength
        })
    } else {
        res.status(400);
        throw new Error('Invalid customer data');
    }
})

// @desc    Remove customer
// route DELETE /api/customers/:id

const removeCustomer = asyncHandler (async (req, res) => {
    const customer = await Customer.findOneAndDelete( { _id: req.params.id })
    if (!customer) {
        res.status(404);
        throw new Error('Customer not found');
    } else {
        res.send(customer);
    }
})

// @desc Get customer by name
// route GET /api/customers/search

const searchCustomer = asyncHandler (async (req, res) => {
   const query = req.query.query;
   const customer = await Customer.find({ name: { $regex: query, $options: 'i' } });
   if (customer.length === 0) {
    res.status(404);
    throw new Error('No customer found');
   } else {
        res.send(customer);
   } 
  
})

// @desc Get all customers
// route GET /api/customers/all

const getAllCustomers = asyncHandler (async (req, res) => {
    const customers = await Customer.find({});
    if (!customers) {
        res.status(404);
        throw new Error('Customers not found');
    } else {
        res.send(customers)
    }
})

export {
    saveCustomer,
    removeCustomer,
    getAllCustomers,
    searchCustomer
}