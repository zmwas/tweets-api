const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSaltSync(10);
                user.password = await bcrypt.hashSync(user.password, salt);
            }
        },

        instanceMethods: {
            validPassword: async (password) => {
                return await bcrypt.compare(password, this.password)
            }
        },
    });
    return User;
};