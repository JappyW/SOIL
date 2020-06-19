/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
    const Fertilizers = sequelize.define('fertilizers', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        ph: {
            type: DataTypes.STRING,
            allowNull: false
        },
        src: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tips: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'fertilizers'
    });
    return Fertilizers;
};
