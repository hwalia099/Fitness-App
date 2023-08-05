import UserProfile from './../models/userprofile.js';

export const search = async (params) =>{
    const userProfiles = await UserProfile.find(params).exec();
    return userProfiles;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const adduserProfile = async(newuserProfile) => {
    const userProfile = new UserProfile({ ...newuserProfile, createdDate: new Date(), modifiedDate: new Date() });
    return userProfile.save();
}


export const getById = async(id) => {
    const userProfile = UserProfile.findById(id).exec();
    return userProfile;
}

export const update = async(id, updateduserProfile) => {
    const userProfile = await UserProfile.findByIdAndUpdate(
        id,
        { ...updateduserProfile, modifiedDate: new Date() },
        { new: true }
      ).exec();
    return userProfile;
}

export const remove = async(id) =>{
    const userProfile = UserProfile.findByIdAndDelete(id).exec();
    return userProfile;
}
