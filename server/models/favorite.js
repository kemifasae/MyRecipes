
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    recipeid: DataTypes.NUMBER,
    userid: DataTypes.NUMBER
  });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User, {
      foreignKey: 'userid',
      onDelete: 'CASCADE',
    });

    Favorite.belongsTo(models.Recipe, {
      foreignKey: 'recipeid',
      onDelete: 'CASCADE'
    });
  };
};
