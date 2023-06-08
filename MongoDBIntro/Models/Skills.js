const mongoose = require('mongoose');

const skills = mongoose.Schema({
    title:String,
    desc:String,
    skillSet:[String]  // Array of String.
});

const Skills = mongoose.model('Skills', skills);
module.exports = Skills;
