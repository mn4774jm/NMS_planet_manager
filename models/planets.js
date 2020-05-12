
module.exports = (sequelize, DataTypes) => {

  let Planets = sequelize.define('Planets', {
    name: {
      type: DataTypes.STRING,
    },
    weather: {
      type: DataTypes.STRING
    },
    resource1: {
      type: DataTypes.STRING
    },
    resource2: {
      type: DataTypes.STRING
    },
    resource3: {
      type: DataTypes.STRING
    },
    galacticCoords: {
      type: DataTypes.STRING
    },
    glyphs: {
      type: DataTypes.STRING
    },
    comments: {
      type: DataTypes.STRING
    }
  })

  Planets.sync({force: false}).then( () => {
    console.log('synced planet data')
  })

  return Planets;
};