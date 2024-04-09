const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Classes extends Model {
    static associate({ Operatives }) {
      this.hasMany(Operatives, { foreignKey: 'class_id' });
    }
  }
  Classes.init(
    {
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Classes',
    },
  );
  return Classes;
};
