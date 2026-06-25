Parte A - Identificación de elementos del framework

__________________________________________________________________________________

Componentes

¿Dónde lo usas en este problema?

R: Se utilizan para las acciones de filtro, el listado de tareas y la representación de las cartitas de las
respectivas recetas.

¿Por qué es el adecuado?

R: Estas se utilizan por medio de componentes debido al contexto de la página, pues se necesitan productos con estados cambiantes, propiedades distintas y representadas en un listado.
_____________________________________________________________________________________

JSX

¿Dónde lo usas en este problema?

R: Es el lenguaje de programación con el cual los 3 componentes indicados en la evaluación están creados. 
También se usará en el archivo App.jsx como un medio principal en donde se importan los demás componentes.

¿Por qué es el adecuado?

R: Porque JSX posee ambas propiedades adecuadas respecto a lo se necesita en esta clase de páginas, como lo es la lógica de los archivos y el maquetado, dentro de un mismo factor, como lo es el componente.

_____________________________________________________________________________________

Props

¿Dónde lo usas en este problema?

R: Se utilizan en los componentes del React para las propiedades de determinados objetos.

¿Por qué es el adecuado?

R: Es útil para brindarle propiedades a los componentes, siendo una variable adecuada al poseer una diversa cantidad de recetas (en este caso).

_____________________________________________________________________________________

Estado (useState)

¿Dónde lo usas en este problema?

R: Se utiliza para medir el estado de las cantidades que se filtrarán en la barrita de búsqueda en el programa/página.

¿Por qué es el adecuado?

R: Ya que la barra de búsqueda es un factor cambiante y dinámico, al sólo escribir una letra esta ya debe
efectuar su acción, es por eso que su respectivo estado debe cambiar.

_____________________________________________________________________________________

Renderizado de listas (.map + key)

¿Dónde lo usas en este problema?

R: Se utilizan en App.jsx para mostrar los resultados importados de la data entregada previamente.

¿Por qué es el adecuado?

R: Para la visualización de los componentes de, por ejemplo la lista de recetas.

_____________________________________________________________________________________

Renderizado condicional

¿Dónde lo usas en este problema?

R: Similar al anterior, en donde se efectúa el renderizado en App.jsx igualmente, pero con condiciones determinadas.

¿Por qué es el adecuado?

R: Porque en este ejercicio se requieren condicionales como, por ejemplo, el hecho de que no todos los platos son vegetarianos, o por las cantidades, que bien podrían ser 0, y para eso se debe renderizar tal escenario.

_____________________________________________________________________________________

*************************************************************************************

¿Qué ventajes tiene dividir el recetario en componentes en lugar de escribir todo en un solo archivo?

R: La ventaja es que cada uno de esos componentes se enfoca puramente en su tarea tarea principal, ya sea 
el listado de tareas, o el código para filtrar las categorías, si eliminas uno te quedará el resto y la página podría funcionar si se ajusta un poco.

*************************************************************************************

¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado
de esta aplicación.

R: En el caso de props, se necesitan para que los componentes se comuniquen entre sí, y así enviar algún tipo de información, por ejemplo, el componente RecetaCard recibe props importados desde otro componente. Mientras que estado es la situación en la que se encuentra el contenido del componente en sí. Por ejemplo, el estado de una carta de receta.