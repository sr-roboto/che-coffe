import { createJwt } from '../helpers/createJwt.js';
import { createUser, getUserByCredentials } from '../models/user.model.js';

export const signInCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await getUserByCredentials(email, password);
    console.log(user);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = await createJwt(user.id);

    res.cookie('token', token);
    console.log(req.cookies.token);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signUpCtrl = async (req, res) => {
  try {
    // ! Completar la función signUpCtrl
    const { email, password, username } = req.body;

    const newUser = await createUser({ email, password, username });

    const token = await createJwt(newUser.id);
    console.log(token);

    res.cookie('token', token);

    return res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signOutCtrl = (_req, res) => {
  try {
    // ! Completar la función signOutCtrl
    res.clearCookie('token');
    res.status(200).json({ message: 'Sign out success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMeCtrl = (req, res) => {
  try {
    console.log(req.user);
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
