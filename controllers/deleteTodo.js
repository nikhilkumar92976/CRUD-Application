const Todo = require("../modules/todo"); // import todo structure for creating a new Todo list

exports.deleteTodo = async (req,res)=>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        // send the json response on success flag
        res.status(200).json(
            {
                success: true,
                message: 'todo deleted successfully',
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