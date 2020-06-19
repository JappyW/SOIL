/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
    const Crops = sequelize.define('crops', {
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
        family: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bestPhMin: {
            type: DataTypes.NUMERIC,
            allowNull: false,
        },
        bestPhMax: {
            type: DataTypes.NUMERIC,
            allowNull: false,
        },
        bestTempMin: {
            type: DataTypes.NUMERIC,
            allowNull: false,
        },
        bestTempMax: {
            type: DataTypes.NUMERIC,
            allowNull: false,
        },
        src: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'crops'
    });
    return Crops;
};
