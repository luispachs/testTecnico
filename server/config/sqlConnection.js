sqlConnection={
    dialect:process.env.DB_TYPE, 
    host:process.env.DB_SERVER,
    port:process.env.DB_PORT,
    encrypt: false,
    trustServerCertificate: true,
};
database = process.env.DB_NAME;
user=process.env.DB_USER;
password=process.env.DB_PASSWORD;

module.exports={sqlConnection,database,user,password}