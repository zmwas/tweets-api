const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(10),
            allowNull: false,
        }

    }, {
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSaltSync(10);
                user.password = await bcrypt.hashSync(password, salt);
            }
        },

        instanceMethods: {
            validPassword: async (password) => {
                return await bcrypt.compare(password, this.password)
            }
        }
    });
    User.associations = (models) => {
        User.hasMany(models.Tweets)
    };
    return User;
};