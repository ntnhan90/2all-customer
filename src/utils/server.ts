const dev = process.env.NODE_ENV !== 'production';

//http://localhost:3010/web-customer/auth/request-otp

export const server = dev ? 'http://localhost:3010/' : 'http://localhost:3010';