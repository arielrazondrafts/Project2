module.exports = function (sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", { 
    employerName: DataTypes.STRING,
    employerEmail: DataTypes.STRING,
    employerStreet: DataTypes.STRING,
    employerCity: DataTypes.STRING,
    employerState: DataTypes.STRING,
    employerZipCode: DataTypes.STRING,
    employerPhoneNumber: DataTypes.STRING
  });

  Employer.associate = function (models) {
    Employer.hasMany(models.Invoice, {
      onDelete: "cascade"
    });
  };
  return Employer;
};
