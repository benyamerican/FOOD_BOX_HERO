
var Sequelize = require("sequelize");  

module.exports = function(sequelize,DataTypes){
  var Donations = sequelize.define("donations", {
  
    business: Sequelize.STRING,
  
    category: Sequelize.STRING,
   
    quantity_avalaible: Sequelize.INTEGER,
  
    address: Sequelize.STRING,
   
    lastCall: Sequelize.DATE,
  
    donorText: Sequelize.STRING,
  
    donated_at: Sequelize.DATE,
  
   
  });
  return Donations;
}