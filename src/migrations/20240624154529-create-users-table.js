const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10000,
      },
      version: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

    await queryInterface.bulkInsert("Users", [
      {
        balance: 10000,
        version: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.addIndex("Users", ["id"]);
    await queryInterface.addIndex("Users", ["version"]);
  },

  down: async ({ context: queryInterface }) => {
    await queryInterface.removeIndex("Users", ["id"]);
    await queryInterface.removeIndex("Users", ["version"]);
    await queryInterface.dropTable("Users");
  },
};
