'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.kelas, {
        foreignKey: 'id_kelas',
        as: 'kelas',
      });
      this.belongsTo(models.spp, {
        foreignKey: 'id_spp',
        as: 'spp',
      });
    }
  }
  siswa.init(
    {
      nisn: {
        type: DataTypes.CHAR,
        primaryKey: true,
      },
      nis: DataTypes.CHAR,
      nama: DataTypes.STRING,
      id_kelas: DataTypes.INTEGER,
      alamat: DataTypes.TEXT,
      no_telp: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      id_spp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'siswa',
      tableName: 'siswa',
    }
  );
  return siswa;
};
