const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  const result = db('cars').where('id', id).first()
  return result
}

const create = async (cars) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(cars)
  const newCar = await getById(id)
  return newCar
}

module.exports = {
  getAll,
  getById,
  create,
}