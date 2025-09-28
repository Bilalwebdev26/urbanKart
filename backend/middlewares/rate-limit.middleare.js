import rateLimit from "express-rate-limit";

export const rateLimter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: "Too many Requests,please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});
