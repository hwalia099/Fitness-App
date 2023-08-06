import User from './../models/user.js';

export const search = async (params) =>{
    const users = await User.find(params).exec();
    return users;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const addUser = async(newUser) => {
    const user = new User({ ...newUser, createdDate: new Date(), modifiedDate: new Date() });
    return user.save();
}


export const getById = async(id) => {
    const user = User.findById(id).exec();
    return user;
}

export const update = async(id, updatedUser) => {
    const user = await User.findByIdAndUpdate(
        id,
        { ...updatedUser, modifiedDate: new Date() },
        { new: true }
      ).exec();
    return user;
}

export const remove = async(id) =>{
    const user = User.findByIdAndDelete(id).exec();
    return user;
}
