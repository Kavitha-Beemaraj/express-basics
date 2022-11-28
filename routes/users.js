const express=require('express')
const router= express.Router();



router.get('/', (req,res) =>{
    res.send('user list')
})

router.get('/new', (req,res) =>{
    res.render("users/new")
})

router.post('/', (req,res) => {
    console.log(res.body.firstname)
    res.send('hi')
})
 
router
.route('/:id')
.get((req,res) =>
{
    console.log(req.user)
    res.send(`get user with id: ${req.params.id}`);
})
.put((req,res) =>
{
    res.send(`update user with id: ${req.params.id}`);
})
.delete( (req,res) =>
{
    res.send(`delete user with id: ${req.params.id}`);
})

const users=[{name: "kavitha"}, {name:"sudha"}]
router.param("id", (req,res,next,id) =>{
    req.user=users[id]
    next();

})
module.exports= router;