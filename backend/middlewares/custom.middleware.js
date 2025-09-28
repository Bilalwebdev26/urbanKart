export const requestLogger =  (req, res, next) => {
  const timeStamp = new Date().toISOString();
  const method = req?.method;
  const url = req?.url;
  const userAgent = req?.get("User-Agent");
  console.log(`[${timeStamp}] ${method} ${url}-${userAgent}`);
  next();
};
