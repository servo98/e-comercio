1. Ecommerce:

   - auth
   - roles
   - registrar productos
   - subida de imágenes
   - listar productos (filtrar, ordenar, paginar)
   - manejo de carrito de compras (agregar, modificar cantidad, eliminar, calcular todal)
   - historial de compras
   - implementar pasarela de pagos (strapi, openpay, mercado pago, paypal)

   - Calificar productos
   - Tener productos favoritos?
   - Guardar búsquedas

Rutas del front

/ Página principal vista productos

/auth/register Registro de usuario
/auth/login Inicio sesión

/profile Perfil de usuario
/profile/edit Editar datos de perfil
/profiles/sales Historial de ventas
/profile/{id} Ver productos de cierta persona

/products Ver mis productos
/products/add Registrar producto
/products/{id} Detalle del producto
/products/{id}/edit Editar producto

/cart Ver mi carrito de compras

/payments/create Pasarela de pagos
/payments Historial de compras

Rutas del back

/auth/register POST registrar usuario
/auth/login POST Iniciar sesión
/profile GET Detalle de usuario
/profile PUT Editar usuario
/profile/{id}/products Productos de una persona

/products GET Lista de productos
/products POST Registrar producto
/products/{id} Detalle producto
/products/{id} PUT Editar producto
/products/{id} DELETE Borrar productos

/cart GET Detalle carrito
/cart POST Agregar producto a carrito
/cart PUT Editar carrito

/payments POST Crear pago
/payments GET Historial de pagos

/sales Historial de ventas
