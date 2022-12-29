
module.exports = {
  up: (queryInterface, _Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        phoneNumber: null,
        mobile: null,
        departament: null,
        verificationCode: '',
        emailChecked: 1,
        cashforceAdm: 1,
        createdAt: '2020-10-01 21:31:37',
        updateAt: '2020-10-01 22:41:23',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};