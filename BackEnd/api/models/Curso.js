/**
 * Curso.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cod:
      {
        type: 'int',
        unique: true
      },

    nombre:
      {
        type:'String',
        defaultsTo: 'NULL'
      },
    descripcion:
      {
        type:'String',
        defaultsTo:'NULL'
      },
    num_horas:
      {
        type:'int'
      },
    coste_curso:
      {
        type:'float'
      }
  },
  connection:'mongodb'
};

