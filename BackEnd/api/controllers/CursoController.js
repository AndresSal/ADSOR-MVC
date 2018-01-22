/**
 * CursoController
 *
 * @description :: Server-side logic for managing Cursoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    agregar_curso:function(req, res)
    {
      var aux=req.allParams();
      Curso.create({nombre:aux.nombre, descripcion:aux.descripcion, num_horas:aux.num_horas, coste_horas:aux.coste_horas}).exec(function(err, cursonuevo){
        if(err)
        {
          res.send(500,{error:"Error de Nase de datos"});
        }
        res.json(cursonuevo);
      })
    },

	  listar_cursos:function(req, res)
    {
      Curso.find({}).exec(function(err, cursos){
        if(err)
        {
          res.send(500,{error:"error de base de datos"});
        }
        res.json(cursos);
      })
    },
    borrar_curso:function(req, res)
    {
      Curso.destroy({nombre:req.nombre}).exec(function(err, cursoborrado)
      {
        if(err)
        {
          res.send(500,{error:"error de la base de datos"});
        }
        res.json(cursoborrado);
      })
    }


};

