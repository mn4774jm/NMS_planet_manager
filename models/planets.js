
module.exports = (sequelize, DataTypes) => {

  // set up DB table
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

  // sync false to not overwrite data on each restart
  Planets.sync({force: false}).then( () => {
    console.log('synced planet data')
  })

  return Planets;
};