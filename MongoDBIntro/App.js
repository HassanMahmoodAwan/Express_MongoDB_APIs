console.clear();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {createSkills, getSkills, getSkillDelete, updateSkills} = require('./Functions/Operations');
app.use(express.json());  // middleware to pass json to express

mongoose.connect('mongodb://127.0.0.1/MernStack', {useNewUrlParser:true, useUnifiedTopology:true}).then(async()=>{
    console.log('MongoDB is connected');
    // let skill = await createSkills('CSS', 'learn Tags', ['Position', 'flex', 'Animation']);
    // console.log(skill);
    // let skill = await getSkills();
    // console.log(skill);
   // console.log(await getSkillDelete("6474f5cd44acbd695fbaf33d"));
   let Skill = await updateSkills("6474f3983fee15c8d4351051", 'HTML Updated', 'learn tags and page sturture', ['head', 'body', 'forms']);
   console.log(Skill);

}).catch(err=>{
    console.log('Error in connected to database');
    console.log(err); 
})



app.listen(3000);