## Getting Started

Primero debe instalar las dependencias requeridas

```bash
npm install

```

Segundo run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

El proyecto esta desarrollado con React.js con Next.js,
se le agregó la librería de Zustand para manejar el estado global dentro del proyecto

## Como navegar?

El usuario iniciara su recorrido dentro de la aplicación desde la 'landing page',
luego deberá loguearse en el apartado 'login' del header, el cual lo llevara al 'home' de un dashboard.

El dashboard mostrara un formulario de carga para poder generar una venta. Este formulario esta dividido en dos partes: un apartado para elegir un cliente y una sucursal, y un segundo apartado donde el usuario podrá elegir el producto con su respectiva cantidad.

El software se encargara de calcular el subtotal según la cantidad de unidades de ese producto y el total de la venta abarcando todos los productos.

Cabe destacar que el usuario podrá elegir entre clientes pre cargados o cargar un cliente nuevo.
Como ejemplo, los clientes cargados cuentan con el siguiente formato: cliente1, cliente2, cliente3 y sucesivamente hasta el cliente999.
De igual manera como se menciono anteriormente, el usuario podrá cargar un cliente nuevo con el nombre que desee y luego deberá elegirlo para comenzar a utilizarlo.

En relación a las sucursales el usuario podrá elegir entre aquellas pre cargadas y no tendrá la posibilidad de cargar una nueva.
Sucursales disponibles: ARGENTINA, PERU, CHILE, ECUADOR, BOLIVIA, CUBA, URUGUAY,BRAZIL, PANAMA, COLOMBIA, EE.UU
Una vez elegida la sucursal, el programa autocompletará la moneda respectiva de dicha sucursal

En el segundo apartado del formulario, el usuario deberá cargar un producto. Estos se verán restringidos según la sucursal anteriormente elegida; si el producto no esta disponible no podrá elegirse. Una vez seleccionado el mismo, la aplicación rellenará el campo correspondiente a 'precio' con el valor unitario del mismo.

El usuario podrá elegir y modificar la cantidad de unidades del producto seleccionado. Es importante aclarar que por defecto el software seteará el valor en 1 unidad y rellenará el apartado de sub total, calculándose automáticamente por producto y cantidad de unidades elegidas.

Una vez realizado lo anterior, el usuario deberá clickear en el botón de 'Add' que agregará el producto a los datos de la venta anteriormente elegidos. El usuario tendrá la posibilidad de agregar o quitar ese u otro producto de la lista a agregar. En este mismo paso, el programa determinará el total de la venta según la cantidad de productos.

Con la creación de la venta el usuario deberá accionar el botón de 'save' y asi guardarla.
Antes de concluir esta acción, la aplicación validará que la venta cumpla con todos lo requisitos, que no falte ningún dato y que la información cargada sea correctos.

Al finalizar el usuario podrá ver las ventas guardadas en el apartado de 'Sales' accediendo desde el sidebar del mismo dashboard en el botón de 'carpeta' 📁. En esta vista se renderizaran ventas pre cargadas , realizadas y nuevas que el usuario pueda crear a futuro.
