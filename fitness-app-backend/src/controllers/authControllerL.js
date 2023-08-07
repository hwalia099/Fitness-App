import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const login = async (req, res) => {
    const { userEmail, password } = req.body;

    try {
        // Check if the user with the given email exists
        const user = await User.findOne({ userEmail });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed-user with email does not exist' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Authentication failed-password and email do not match' });
        }

        // At this point, the user is authenticated
        // You can generate a token or session for the user here if needed
        res.status(200).json({ message: 'Authentication successful' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong-500 error' });
    }
};
