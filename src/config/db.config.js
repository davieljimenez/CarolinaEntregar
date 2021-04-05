module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "toor",
    DB: "carolina_spa_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};


// module.exports = {
//     HOST: "queenie.db.elephantsql.com",
//     USER: "ktiieqzh",
//     PASSWORD: "Nr54tzq3H6GWnKrvf-XKQFe2EoX9FyyJ",
//     DB: "ktiieqzh",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },

// }