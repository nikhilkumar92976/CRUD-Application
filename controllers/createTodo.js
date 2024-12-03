const Todo = require("../modules/todo"); // import todo structure for creating a new Todo list

exports.createTodo = async (req,res)=>{
    try{
        //fetch the title and description form the request body
        const {title, description} = req.body;
        //create a todo object and insert in database
        const response = await Todo.create({title,description});
        // send the json response on success flag
        res.status(200).json(
            {
                success: true,
                message: 'Todo created successfully',
                data: response
            }
        )
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success: false,
                message: 'Failed to create todo',
                error: err.message
            }
        )
    }
}