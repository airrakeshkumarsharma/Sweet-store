const sweetService = require("./../services/sweet").sweetService

const sweetController = {
   add: async (req, res) => {
        const data = req.body
        await sweetService.add(data)
        return res.send(data)
    },

    update: () => {

    },

    delete: () => {

    },

    getOne: () => {

    },
    getMany: async (req, res) => {
        const allSweets = await sweetService.getMany()
        return res.send(allSweets)
    }
}

module.exports = {
    sweetController
}
