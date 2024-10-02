Este proyecto se enfoca en mostrar información dinámica del clima en base a una localización
Se empleará lo siguiente:
- App permissions de localización para registrar la ubicación del usuario
- Hooks de react para manejar el estado correctamente, tales como:
  . useEffect
  . useState
  . customHooks
- Se sigue un diseño ordenado, dividido en 3 seccciones:
  . Información básica
    . Contiene la ubicación, hora local, interpretación del clima e ícono para demostrar el clima actual
  . Input para cambiar la localización
    . Contiene un buscador de localizaciones para mostrar la información básica y avanzada de esta
  . Información avanzada
    . Contiene datos adicionales como la velocidad del viento, hora de salida y puesta del sol
- Se emplea navegación para poder ir a la página de pronóstico de 7 días
  . En aquel pronóstico se visualiza las temperaturas por 7 días de una localización
- Se emplea un searchBar para buscar una ciudad y presentar su información
  . Se emplearon API públicas para el proyecto geo-localization.API
- Se emplea notificaciones proveída por expo-notifications a través de un token.
