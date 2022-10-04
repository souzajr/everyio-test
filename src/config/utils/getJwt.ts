import jwt from 'jsonwebtoken';

const getJwt = (): string => {
  const now = Math.floor(Date.now() / 1000);

  const payload = {
    iat: now,
    exp: now + 60 * 60 * 1,
  };

  const token = jwt.sign(payload, process.env.AUTH_SECRET!);

  return token;
};

export default getJwt;
