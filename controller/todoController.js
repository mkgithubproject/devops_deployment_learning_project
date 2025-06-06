const Todo = require('../models/Todo');

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).lean();
        res.status(200).json({
            success: true,
            message: 'Todos fetched successfully',
            todos: todos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching todos',
            error: error.message
        });
    }
}
exports.createTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        let todo = await Todo.create({
            title: title,
            description: description
        });

        if (!todo) {
            return res.status(200).json({
                success: false,
                message: 'Failed to create todo'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Todo created successfully',
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating todo',
            error: error.message
        });
    }
}

