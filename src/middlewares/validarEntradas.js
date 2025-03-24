import{body, validationResult} from 'express-validator';

// captura los errores de validacion
const validarCampos = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    next();
};

//Validaciones para usuarios incluyendo administrador y vendedor
const validarUsuario =[
    body('nombre').notEmpty().withMessage('El nombre es obligatorio').isString(),
    body('correoElectronico').notEmpty().withMessage('El correo es obligatorio').isEmail(),
    body('contrasena').notEmpty().withMessage('La contraseña es obligatoria').isLength({min : 6}),
    body('tipoUsuario').notEmpty().withMessage('El tipo de usuario es obligatorio')
        .isIn(['administrador', 'cliente', 'vendedor']).withMessage('Tipo de usurio invalido'),
        validarCampos
];

//Validacion de clientes
const validarCliente = [... validarUsuario,
    body('direccion').notEmpty().withMessage('La direccion es obligatoria'),
    body('telefono').notEmpty().withMessage('El telefono es obligatorio'),
    validarCampos
];

//validacion de tiendas
const validarTienda = [... validarUsuario,
    body('nombreTienda').notEmpty().withMessage('El nombre de la tienda es obligatorio'),
    body('descripcionTienda').notEmpty().withMessage('La descripcion es obligatoria'),
    validarCampos
];

//validacion de productos
const validarProducto = [
    body('nombre').notEmpty().withMessage('El nombre del producto es obligatoria'),
    body('descripcion').notEmpty().withMessage('La descripcion del producto es obligatoria'),
    body('precio').notEmpty().withMessage('El precio del producto es obligatorio').isFloat({gt:0}),
    body('stock').notEmpty().withMessage('El stock es obligatorio').isInt({min:0}),
    body('idVendedor').notEmpty().withMessage('El ID del vendedor es obligatorio').isMongoId(),
    validarCampos
];

//Validacion de pedidos
const validarPedido = [
    body('idCliente').notEmpty().withMessage('El ID es obligatorio').isMongoId(),
    body('fechaCompra').notEmpty().withMessage('La fecha es un dato obligatorio'),
    body('estado').notEmpty().withMessage('El estado del pedido es obligatorio')
    .isIn(['pendiente', 'enviado', 'entregado', 'cancelado']).withMessage('Estado invalido'),
    validarCampos
]

//Validacion de detalle del carrito 
const validarDetalleCarrito = [
    body('idCarrito').notEmpty().withMessage('El ID del carrito es obligatorio').isMongoId(),
    body('idProducto').notEmpty().withMessage('El ID del producto es obligatorio').isMongoId(),
    body('cantidad').notEmpty().withMessage('La cantidad es obligatoria').isInt({min:1}),
    validarCampos

];

//Validacion de reseñas 
const validarReseña = [
    body('idCliente').notEmpty().withMessage('El ID del cliente es obligatorio').isMongoId(),
    body('idProducto').notEmpty().withMessage('El ID del producto es obligatorio').isMongoId(),
    body('calificacion').notEmpty().withMessage('La calificación es obligatoria').isInt({ min: 1, max: 5 }),
    body('comentario').notEmpty().withMessage('El comentario es obligatorio'),
    validarCampos
];


//Validacion de mensajes
const validarMensaje = [
    body('idCliente').notEmpty().withMessage('El ID del cliente es obligatorio').isMongoId(),
    body('idVendedor').notEmpty().withMessage('El ID del vendedor es obligatorio').isMongoId(),
    body('contenido').notEmpty().withMessage('El contenido del mensaje es obligatorio'),
    body('fechaHora').notEmpty().withMessage('La fecha y hora del mensaje es obligatoria').isISO8601(),
    validarCampos
];


export { 
    validarCampos,
    validarUsuario, 
    validarCliente, 
    validarTienda, 
    validarProducto, 
    validarPedido, 
    validarDetalleCarrito, 
    validarReseña, 
    validarMensaje 
};





