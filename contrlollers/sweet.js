const sweetService = require("./../services/sweet").sweetService

const sweetController = {
   add: async (req, res) => {
        const data = req.body

        await sweetService.add(data)
        return res.send(data)
    },

    update: async (req, res) => {
        const { id }= req.params
        const data = req.body
        const condition  = { _id: id }

        await sweetService.update(condition, data)

        return res.send({ message: "Data updated" })
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
