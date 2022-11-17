const userController = require('../controllers/userController');
//Rutas 

module.exports = (router) => {
    router
        .get('/', userController.dameUser)
        .get('/usuarios', userController.usuarios)
        .post('/usuarios', userController.actualizar)
        .get('/formulario', userController.formulario)
        .get('/sucursales', userController.sucursales)
        .post('/formulario', userController.envioFormulario)
        .post('/delete', userController.eliminar)
        /* .delete('/delete/:id', userController.eliminar) */
        /* .put('/usuarios/:id', userController.actualizar) */
    return router;
}



