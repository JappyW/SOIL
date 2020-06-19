/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
    const Queries = sequelize.define('queries', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        ph: {
            type: DataTypes.JSON, 
            allowNull: true
        },
        temp: {
            type: DataTypes.ARRAY(DataTypes.NUMERIC),
            allowNull: false
        },
        hint: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        crops: { 
            type: DataTypes.JSON, 
            allowNull: true
        },
        plants: { 
            type: DataTypes.JSON, 
            allowNull: true
        },
        fertilizers: { 
            type: DataTypes.JSON, 
            allowNull: true
        },
        date: { 
            type: DataTypes.STRING, 
            allowNull: false
        },
    },
    {
        tableName: 'queries'
    });
    return Queries;
};
