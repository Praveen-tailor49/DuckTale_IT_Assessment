import employee from "../models/employee.js";
 

export const addEmployee = async (req,res,next) => {
    const {name, department, salary} = req.body
    const newEmployee = new employee({
      name, department, salary
    })
    
    try{
        const saveEmployee = await newEmployee.save()
        res.status(200).json( saveEmployee)
        
    }catch(err){
        next(err)
    }
}

export const getEmployee = async (req,res,next) => {
    try{
        const Employees = await employee.find()
        res.status(200).json(Employees)
    }catch(err){
        next(err)
    }
}


export const updateEmployee = async (req,res,next) => {
    try{
        const updateEmployee = await employee.findByIdAndUpdate(req.body.id, { $set: req.body},
            { new: true})
        res.status(200).json(updateEmployee)
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteEmployee = async (req,res,next) => {
    try{
        await employee.findByIdAndDelete(req.body.id)
       res.status(200).json("Product has been deleted")
   }catch(err){
       res.status(500).json(err)
   }
}
