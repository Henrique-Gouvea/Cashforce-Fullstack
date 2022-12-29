
module.exports = {
  up: (queryInterface, _Sequelize) => queryInterface.bulkInsert('cnpjs',
    [
      {
        id: 1,
        cnpj: '00000000000001',
        companyType: '2',
        createdAt: '2020-10-29 21:20:33',
        updateAt: '2020-10-29 21:20:33',
      },
      {
        id: 2,
        cnpj: '00000000000002',
        companyType: '1',
        createdAt: '2020-10-29 21:20:33',
        updateAt: '2020-10-29 21:20:33',
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('cnpjs', null, {}),
};