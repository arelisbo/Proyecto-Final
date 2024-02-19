import jwt from 'jsonwebtoken';

export const checkToken = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json("prueva");
    }

    let token = ""
    let authToken = req.headers['authorization']
    if (authToken.includes("Bearer")) {
        token = req.headers['authorization'].split(' ')[1];
    } else {
        return res.json({ error: 'Token inválido' });
    }

    try {
        req.user = jwt.verify(token, process.env.AUTH_KEY);
        next();
    } catch (error) {
        return res.json({ error: 'Token inválido' });
    }
};