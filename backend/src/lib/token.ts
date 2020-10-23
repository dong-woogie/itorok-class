import jwt, { SignOptions } from "jsonwebtoken";

const { SECRET_KEY } = process.env;

export const generateToken = async (
  payload: any,
  options?: SignOptions
): Promise<string> => {
  const jwtOptions: SignOptions = {
    expiresIn: "7d",
    ...options,
  };
  const secretKey = SECRET_KEY || "KeyForJWTToken";
  return Promise.resolve(jwt.sign(payload, secretKey, jwtOptions));
};

export const decodeToken = async (token: string) => {
  const secretKey = SECRET_KEY || "KeyForJWTToken";
  return Promise.resolve(jwt.verify(token, secretKey));
};

export const refreshToken = async () => {};
