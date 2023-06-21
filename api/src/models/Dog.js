const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      minHeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxHeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minLife_span: {
        type: DataTypes.STRING,
      },
      maxLife_span: {
        type: DataTypes.STRING,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
