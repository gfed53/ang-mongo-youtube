// jshint esversion: 6

const express = require('express');
const router = express.Router();

const Todo = require('../schemas/Todo');

const config = require('../config');





router.get('/todos', function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        console.log('todos are:', todos);
        res.json(todos);
    });
});

router.post('/todos', function(req, res){
	Todo.create({
        description: req.body.description,
        checked: false
    }, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
    });
});

router.put('/todos/:id', function(req,res) {
	console.log('put req params:', req.params);
	console.log('put req body:', req.body);
	// console.log(req.body);
	if(req.params.id !== req.body.id){
		return res.status(400).json({
			message: 'Bad Request, Hombre'
		});
	}
	Item.findOneAndUpdate({_id: req.params.id}, {checked: !checked}, function(err,item){
		console.log('updated item:', item);
		if(err || !item) {
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(item);
	});
});

router.delete('/todos/:id', function(req,res) {
	console.log(req.params);
	console.log(typeof req.params.id);
	Item.findOneAndRemove({_id: req.params.id}, function(err, item){
		if(err || !item){
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(item);
	});
});

