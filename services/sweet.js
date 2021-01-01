const sweetModel = require("../models/sweet").sweetModel
const sweetController = require("../contrlollers/sweet").sweetController;



exports.sweetService = { 
   add: async data => {
       const sweet = await sweetModel.create(data)

       return sweet
    },

    getMany: async () => {
        return await sweetModel.find({}) 
    },
    
    update: () => { 
    },

    getOne: () => { 
    },
    


    Delete: () => {
    }
  };
