module.exports = function(sequelize, DataTypes) {
  var Invoice = sequelize.define("Invoice", {
    invoiceAmount: DataTypes.DECIMAL,
    paidStatus: DataTypes.BOOLEAN
  });

  Invoice.associate = function(models) {
    Invoice.belongsTo(models.Employer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Invoice;
};
