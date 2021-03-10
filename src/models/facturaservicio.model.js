module.exports = (sequelize, Sequelize) => {

  const FacturaServicio = sequelize.define('facturaservicio', {
      id_facturaservicio: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement : true,
          allowNull: false
      },
      id_servicio: {
          type: Sequelize.INTEGER,
          references: {
            type: Sequelize.INT,
            model:'servicios',
            key: 'id_servicio'
          },
          allowNull: false
      },
      id_usuario: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      id_cliente: {
          type: Sequelize.INTEGER,
          references: {
            type: Sequelize.INT,
            model: 'Clientes',
            key: 'ID_Cliente'
          },
          allowNull: false
      },
      id_estadofactura: {
        type: Sequelize.INTEGER,
        references: {
          type: Sequelize.INT,
          model: 'EstadoFactura',
          key: 'ID_EstadoFactura'
        },
        allowNull: false
      },
      fechafactura: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      fecharegistro: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
  },
  {
      timestamps: false
  });
  return FacturaServicio;
};