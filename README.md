# Technical Test Genios 🚀

Este proyecto integra la API de [HuggingFace](https://huggingface.co/docs/huggingface.js/inference/README) 🤗 con **JavaScript** para trabajar con modelos de análisis de sentimientos a partir de comentarios recopilados de las redes sociales.

## Tecnologías Utilizadas

Las tecnologías utilizadas en este proyecto son 🛠️:

- [React](https://react.dev/) - Librería.
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación.
- [Tailwindcss](https://tailwindcss.com/) - CSS framework.
- [Vite](https://vitejs.dev/) - Entorno de desarrollo.
- [Firebase](https://firebase.google.com/) - Base de datos.
- [HuggingFace](https://huggingface.co/) - API.

## Primeros Pasos 🏃‍♂️

### Clonación del Proyecto

Para iniciar el proyecto, sigue estos pasos:

```sh
$ git clone https://github.com/juancodev/technical_test_genios.git 
$ cd technical_test_genios
```

### Configuración con Vite

1.  Instala las dependencias del proyecto:

`$ npm install`

2.  Inicia el servidor de desarrollo:

`$ npm run dev`

¡Y listo! Tu aplicación estará corriendo en `localhost:5173`.

## Antes de Comenzar 📝

Antes de comenzar, asegúrate de tener en cuenta los siguientes requisitos:

1.  **Cuenta en HuggingFace**: Necesitarás una cuenta en HuggingFace para obtener un token de autenticación que te permitirá realizar peticiones a la API de análisis de sentimientos. Visita [HuggingFace](https://huggingface.co/) para registrarte.

2.  **Aplicación en Firebase**: Debes crear una aplicación en Firebase para utilizar su sistema de autenticación. Esto te permitirá registrar usuarios en tu aplicación. Visita [Firebase](https://firebase.google.com/) para crear una nueva aplicación.

### Configuración de Variables de Entorno

1.  Crea un archivo `.env` en la raíz del proyecto.

2.  Agrega las siguientes variables con sus respectivos valores:

```sh
HUGGINGFACE_TOKEN=your_huggingface_token
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

Recuerda reemplazar `your_huggingface_token`, `your_firebase_api_key`, etc., con los valores correspondientes que obtuviste al registrar tu cuenta en HuggingFace y crear tu aplicación en Firebase.

---

## Conclusión 🎉

Este proyecto representa un paso adelante en la automatización del análisis de sentimientos en redes sociales, aprovechando la potencia de la API de HuggingFace y la flexibilidad de Firebase. Con una configuración adecuada y el seguimiento de los pasos descritos, estarás listo para comenzar a explorar y experimentar con las capacidades de análisis de sentimientos de este proyecto.

¡Gracias por utilizar este proyecto! 😊🚀
