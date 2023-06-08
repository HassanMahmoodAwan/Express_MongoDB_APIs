const Skill = require("../Models/Skills");

const createSkills = async(title, desc, skillSet)=>{
    console.log('Functions Called');
    const Skills = new Skill();
    Skills.title = title;
    Skills.desc = desc;
    Skills.skillSet = skillSet;
    await Skills.save();
    return Skills;
};
const updateSkills = async (_id, title, desc, skillSet) => {
  console.log("Functions Called");
  const Skills = await Skill.findById(_id);
  Skills.title = title;
  Skills.desc = desc;
  Skills.skillSet = skillSet;
  await Skills.save();
  return Skills;
};

const getSkills = async ()=>{
    let Skills = await Skill.find();
    return Skills; 
}

const getSkillDelete = async (_id) => {
  let Skills = await Skill.findByIdAndDelete(_id);
  return Skills;
};




module.exports.createSkills = createSkills;  // for multiple exports;
module.exports.getSkills = getSkills;
module.exports.getSkillDelete = getSkillDelete;
module.exports.updateSkills = updateSkills;