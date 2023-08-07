import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const signup = async (req, res) => {
    const { userName, userEmail, userPhone, password } = req.body;

    try {
        // Check if the user with the given email already exists
        const existingUser = await User.findOne({ userEmail });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName,
            userEmail,
            userPhone,
            password: hashedPassword,
            createdDate: new Date(),
            modifiedDate: new Date(),
            isActive: true
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
