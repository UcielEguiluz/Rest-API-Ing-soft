const AccesoProhibidoException= use ('App/Exceptions/AccesoProhibidoException');
const RecursoNoEncontradoException= use ('App/Exceptions/RecursoNoEncontradoException');

class AutorizacionService{
    verificacionPermiso(recurso, user){
        if (!recurso) {
            throw new RecursoNoEncontradoException();
        }
        if (recurso.user_id!=user.id) {
            throw new AccesoProhibidoException(); 
        };
    }
}

module.exports = new AutorizacionService();