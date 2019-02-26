module.exports = (sequelize, DataTypes) => {
    const Tweet = sequelize.define('tweet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });
    Tweet.associations = (models) => {
        Tweet.belongsTo(models.User)
    };
    return Tweet;
};