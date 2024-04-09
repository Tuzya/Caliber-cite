const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Operatives extends Model {
    static associate({ Classes }) {
      this.belongsTo(Classes, { foreignKey: 'class_id' });
    }
  }
  Operatives.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      squad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Classes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Operatives',
    },
  );
  return Operatives;
};
