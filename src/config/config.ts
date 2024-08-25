export const config = () => ({
    PORT: process.env.PORT || 3000,
    MONGODBCONFIG: process.env.MONGODBCONN || 'localhost',
    AUTHSTRING : process.env.AUTHSTRING
  })