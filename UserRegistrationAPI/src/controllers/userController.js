import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const { name, email, age, password } = req.body;
        if (!name || !email || !age || !password) {
            throw new Error("Name or Email or age or password is missing")
        };

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            age,
            hashPassword: passwordHash
        });

        if (!user) {
            throw new Error("User registration failed please try again");
        }

        return res.status(201).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                age: user.age
            },
            message: "User created successfully!"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}