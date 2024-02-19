//first step necessary connect to collection

const User=require('../models/user.models')


// secound step you should add a method to retrive data

module.exports.FindallUsers=(req,res)=>{
    User.find()

    .then((allDatausers) => {
        res.json({users:allDatausers})
    })
    .catch((err)=>{
        res.json({message: 'somthine went wrong',error:err})
    });


}

module.exports.UserwithID=(req,res)=>{
    User.findOne({_id:req.params.id})
    .then(findOneUser=>{
        res.json({user:findOneUser})
    })
    .catch((err)=>{
        res.json({message:"you have problem with id",error:err})

    })
}


module.exports.CreateNewuser=((req,res)=>{
    User.create(req.body)
    .then(newCreateuser=>{
        res.json({user:newCreateuser})
    })
    .catch((err)=>{
        res.json({message:"something wrong happend during creatinf",error:err})
    })
})

module.exports.deleteuserById = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}



        module.exports.findAndUpdate=(req,res)=>{
            User.updateOne({_id:req.params.id},req.body)
            .then(Update=>{
                res.json({user:Update})
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in update', error: err })
            });
        }