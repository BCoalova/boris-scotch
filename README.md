# Proyecto final del curso Reactjs de [Coder House](https://www.coderhouse.com/)

[Repositorio](https://github.com/BCoalova/mrace)

**Profesor**: Horacio Gutierrez Estevez

**Tutora**: Rocío Del Pilar Esteban

**Alumno**: Boris Coalova

[*Creado con create-react-app*](https://create-react-app.dev/)

### Tipo del aplicativo web: ecommerce

### Dependencias utilizadas (ver en [package.json](https://github.com/BCoalova/mrace/blob/main/package.json) )

Dependencia | Versión 
----------- | -----------  
Node | 15.4.0 
Node-sass | 4.14.1 
React | 17.0.1 
React-dom | 17.0.1 
React-router-dom | 5.2.0 
React-scripts | 4.0.1 
Web-vitals | 0.2.4 
Firebase | 8.2.2 
Bootstrap | 4.5.3  
React-bootstrap | 1.4.0 
React-bootstrap-icons | 1.1.0 


### Iniciar el proyecto

#### Ten en cuenta que este proyecto utiliza una *Cloud Firestore* de [Google Firebase](https://firebase.google.com/) y los datos de acceso no están incluidos en el repositorio 

La base de firestore se utiliza tanto para traer la información de los productos y las categorias al aplicativo, como para generar ordenes de compra desde el aplicativo. 

Para simular este comportamiento es necesario crear un nuevo Project dentro de firebase que se titule ```coderhouse-ecommerce``` y agregar una web app al mismo dentro de la configuración de firebase (guarda los datos de configuración, los vamos a utilizar más adelante)

El proyecto debe contener dos colecciones: 

**items** podés encontrar la información de los items en [data.json](https://github.com/BCoalova/mrace/blob/main/public/data/data.json) 

**categories** ```{ key: 'geforce', name: 'GeForce'  }, { key: 'amd', name: 'AMD' }``` 

1. Descargá o clona el repositorio
2. Creá un nuevo proyecto en firebase con las indicaciones e información mencionada anteriormente
3. Remplaza los datos de configuración en el archivo  [firebase.js](https://github.com/BCoalova/mrace/blob/main/src/firebase.js) con los datos que te administra firebase
4. Si no tenes instalado [nodejs](https://nodejs.org/), descargalo e instalalo
5. Instala create-react-app, abre la consola y tipea ```npm install -g create-react-app``` 
6. Navega dentro de la consola a la carpeta del proyecto y tipea ```npm i``` 
7. Esperá que las dependencias mencionadas anteriormente se instalen correctamente
8. En la misma consola ejecuta ```npm start```
9. Espera que se compile y luego se abrirá el aplicativo en tu explorador predeterminado

*Este aplicativo web es una simulación, por lo tanto la información proporcionada **no debe** ser considerada como real, tanto los precios, como la disponibilidad de stock han sido inventados para este proyecto. Es recomendable no proporcionar información real a la hora de completar el formulario de compra. Dicho formulario es parte de la simulación y no un compromiso de compra o reserva. Los articulos proporcionados por este aplicativo no están disponibles.*