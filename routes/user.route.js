const userController=require('../controllers/user.controllers');
module.exports=app=>{
    app.get('/api/users',userController.FindallUsers);
    app.post('/api/users',userController.CreateNewuser)
    app.get('/api/users/:id',userController.UserwithID);
    app.delete('/api/users/:id',userController.deleteuserById)
    app.put('/api/users/:id',userController.findAndUpdate);
}