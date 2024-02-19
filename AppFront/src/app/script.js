function abrirWhatsApp() {
    // Número de teléfono al que enviar el mensaje (debe incluir el código de país)
    var numero = "+573177297273"; // Reemplaza esto con el número deseado
  
    // Mensaje predeterminado
    var mensaje = "¡Bienvenido a Rissotto Ristorante! ¿Cómo puedo ayudarte?";
  
    // Crear el enlace de WhatsApp
    var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  
    // Abrir enlace en una nueva pestaña
    window.open(link);
  }
  
  // Asignar la función abrirWhatsApp al evento clic del botón
  document.getElementById("whatsapp-btn").addEventListener("click", abrirWhatsApp);