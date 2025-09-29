import userModel from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password, role } = req.body;
  
  try {
    // Check if user already exists by email
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        error: 'A user with this email already exists' 
      });
    }

    // If username provided, check if it already exists
    if (username) {
      const existingUsername = await userModel.findOne({ username });
      if (existingUsername) {
        return res.status(400).json({ 
          success: false, 
          error: 'Username already taken. Please choose a different username.' 
        });
      }
    }

    // Create user with username or fallback to email
    const user = await userModel.create({ 
      username: username || email, 
      email, 
      password, 
      role 
    });
    
    const token = user.getSignedJwtToken();
    res.status(201).json({ success: true, token });
  } catch (error) {
    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const value = error.keyValue[field];
      
      if (field === 'email') {
        return res.status(400).json({ 
          success: false, 
          error: 'A user with this email already exists' 
        });
      } else if (field === 'username') {
        return res.status(400).json({ 
          success: false, 
          error: 'Username already taken. Please choose a different username.' 
        });
      }
    }
    
    res.status(400).json({ success: false, error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
    const token = user.getSignedJwtToken();
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};