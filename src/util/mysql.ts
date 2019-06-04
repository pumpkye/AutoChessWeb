import { Sequelize } from 'sequelize-typescript'
export const mysql = new Sequelize({
    dialect: 'mysql',
    database: 'auto_chess',
    username: 'root',
    password: '1008610010',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    timezone: '+08:00',
    modelPaths: [__dirname + '../model']
})
console.log([__dirname + '../model']);
mysql.addModels([__dirname + '../model'])