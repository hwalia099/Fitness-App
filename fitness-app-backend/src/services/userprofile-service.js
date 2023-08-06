import UserProfile from './../models/userprofile.js';

export const search = async (params) => {
    const userProfiles = await UserProfile.find(params).exec();
    return userProfiles;
}

//added modifiedDate: new date() so that all updates and creates are marked with current date as modified date
export const adduserProfile = async (newuserProfile) => {
    var currentWeightInKg = (newuserProfile.currentWeight) / 2.2046;
    var targetWeightInKg = (newuserProfile.targetWeight) / 2.2046;
    var heightInM = (newuserProfile.height) / 100;

    var cBmi = (currentWeightInKg / (heightInM * heightInM)).toFixed(2);
    var tBmi = (targetWeightInKg / (heightInM * heightInM)).toFixed(2);

    var userId = newuserProfile.userId;

    const userP = await UserProfile.find({ userId }).exec();
    if (userP.length > 0) {
        console.log("inside if");
        var currentWeightInKg = (newuserProfile.currentWeight) / 2.2046;
        var targetWeightInKg = (newuserProfile.targetWeight) / 2.2046;
        var heightInM = (newuserProfile.height) / 100;

        var cBmi = (currentWeightInKg / (heightInM * heightInM)).toFixed(2);
        var tBmi = (targetWeightInKg / (heightInM * heightInM)).toFixed(2);

        console.log(userP[0]._id);
        const userProfile = await UserProfile.findByIdAndUpdate(
            userP[0]._id,
            { ...newuserProfile, curentBmi: cBmi, targetBmi: tBmi, modifiedDate: new Date() },
            { new: true }
        ).exec();
        return userProfile;
    }

    const userProfile = new UserProfile({ ...newuserProfile, curentBmi: cBmi, targetBmi: tBmi, createdDate: new Date(), modifiedDate: new Date() });
    return userProfile.save();
}


export const getById = async (id) => {
    const userProfile = UserProfile.findById(id).exec();
    return userProfile;
}

export const update = async (id, updateduserProfile) => {
    var currentWeightInKg = (updateduserProfile.currentWeight) / 2.2046;
    var targetWeightInKg = (updateduserProfile.targetWeight) / 2.2046;
    var heightInM = (updateduserProfile.height) / 100;

    var cBmi = (currentWeightInKg / (heightInM * heightInM)).toFixed(2);
    var tBmi = (targetWeightInKg / (heightInM * heightInM)).toFixed(2);
    const userProfile = await UserProfile.findByIdAndUpdate(
        id,
        { ...updateduserProfile, curentBmi: cBmi, targetBmi: tBmi, modifiedDate: new Date() },
        { new: true }
    ).exec();
    return userProfile;
}

export const remove = async (id) => {
    const userProfile = UserProfile.findByIdAndDelete(id).exec();
    return userProfile;
}
