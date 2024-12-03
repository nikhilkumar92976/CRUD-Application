const Todo = require("../modules/todo"); // import todo structure for creating a new Todo list


exports.getTodo = async (req,res)=>{
    try{
        // fetch all todos from the database
        const todos = await Todo.find({});

        res.status(200).json(
            {
                success: true,
                message: 'Todos fetched successfully',
                data: todos
            }
        )
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success: false,
                message: 'Failed the fetching the data',
                error: err.message
            }
        )
    }
}


exports.getTodoById = async (req,res)=>{
    try{
        const id = req.params.id;
        // fetch all todos from the database
        const todos = await Todo.findById({_id:id});

        if(!todos){
            return res.status(404).json(
                {
                    success: false,
                    message: 'Todo not found'
                }
            )
        }

        res.status(200).json(
            {
                success: true,
                message: 'Todos fetched successfully',
                data: todos
            }
        )
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success: false,
                message: 'Failed the fetching the data',
                error: err.message
            }
        )
    }
}