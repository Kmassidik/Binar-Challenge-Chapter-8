'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.addColumn(
      'Profiles',
      'UserId',
      {
        type : Sequelize.INTEGER,
        references : {
          model : 'Users',
          key : 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn(
      'Profiles',
      'UserId',
    );
  }
};
