/**
 * CursoController
 *
 * @description :: Server-side logic for managing Cursoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  listar_cursos:function(req, res)
    {
      Curso.find({}).exec(function(err, cursos){
        if(err)
        {
          res.send(500,{error:"error de base de datos"});
        }
        res.json(cursos);
      })
    }
};

