const Todo = require("../modules/todo"); // import todo structure for creating a new Todo list

exports.updateTodo = async (req,res)=>{
    try{
        const {id} = req.params;
        //fetch the title and description form the request body
        const {title, description} = req.body;
        
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description,updatedAt:Date.now()},
        )

        // send the json response on success flag
        res.status(200).json(
            {
                success: true,
                message: 'Updated successfully',
                data: todo
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