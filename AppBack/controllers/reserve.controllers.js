import reserveSchema from "../models/reserve.js"

export const createReserve = async(Reserve) => {
  return await reserveSchema.create(Reserve)
};

export const getReserve = async () => {
  return await reserveSchema.find()
        }

export const deleteReserve = async (deleteId) => {
  return await reserveSchema.deleteOne({_id: deleteId})
    };

export const getReserveByID = async(getId) => {
  return await reserveSchema.findOne({_id: getId})
}

export const putReserve = async(editId) => {
  return await reserveSchema.find({_id: editId})
}



