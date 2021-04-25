const config = {
  port: parseInt(process.env.PORT) || 8000,
  database: {
    user: process.env.DATABASE_USER || 'root',
    name: process.env.DATABASE_NAME || 'todo',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    password: process.env.DATABASE_PASSWORD || 'password',
  },
};

export default config;
