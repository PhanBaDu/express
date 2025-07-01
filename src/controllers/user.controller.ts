import { Request, Response } from 'express'
import User from '../models/user.model'

export const createUser = async (req: Request, res: Response) => {
  const { name, imageUrl } = req.body

  const user = new User({ 
    name: name, 
    imageUrl: imageUrl 
  })

  const data = await user.save()

  res.status(200).json({
    message: 'User created successfully',
    data: data
  })
}


export const getALlUser = async (req: Request, res: Response) => {
  const users = await User.find()

  res.status(200).json({
    message: 'Get user successfully',
    data: users
  })
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params
  
  // const user = await User.findOne({
  //   _id: id
  // })

    const user = await User.findById(id)

  if (!user) {
    res.status(403).json({
      message: "User nay khong ton tai"
    })
  }


  res.status(200).json({
    message: 'Get user successfully',
    data: user
  })
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params
  
  const user = await User.findById(id) // tim xong roi => 

  if (!user) {
    res.status(403).json({
      message: "Nguoi nay khogn ton tai"
    })
  } else {
    await User.deleteOne({
      _id: id
    })

    res.status(200).json({
      message: "Xoa thanh thanh cong"
    })
  }
}

export const udpateName = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name } =req.body

  const user = await User.findByIdAndUpdate(id, { name: name }, { new: true })
  
  if (!user) {
    res.status(403).json({
      message: "Nguoi nay khogn ton tai"
    })
  } else {
    res.status(200).json({
      message: "Cap nhat ten thanh cong"
    })
  }
}


export const updateAll = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, imageUrl : aaaa } = req.body

  const user = await User.findByIdAndUpdate(id, { name: name, imageUrl: aaaa }, { new: true })
  
  if (!user) {
    res.status(403).json({
      message: "Nguoi nay khogn ton tai"
    })
  } else {
    res.status(200).json({
      message: "Cap nhat ten thanh cong"
    })
  }
}