import { ADD_NUM,DELETE_NUM } from "./constants";
//相当于{return({....})}
export const addAction = (count) => ({
  type:ADD_NUM,
  num:count
})

export const deleteAction = (count) => ({
    type:DELETE_NUM,
    num:count
  })