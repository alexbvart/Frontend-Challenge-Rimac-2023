export function getAge(fechaNacimiento: string): number {
    // Comprueba si la fecha de nacimiento tiene el formato correcto

    // const fechaNacimientoRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
    // if (!fechaNacimientoRegex.test(fechaNacimiento)) {
    //   console.log("Formato de fecha de nacimiento incorrecto");
    //   return null;
    // }
  
    // Divide la fecha en día, mes y año
    const partesFecha = fechaNacimiento.split("-");
    const diaNacimiento = parseInt(partesFecha[0], 10);
    const mesNacimiento = parseInt(partesFecha[1], 10) - 1; // Resta 1 al mes
    const anioNacimiento = parseInt(partesFecha[2], 10);
  
    // Crea un objeto de fecha con la fecha de nacimiento
    const fechaNacimientoObj = new Date(anioNacimiento, mesNacimiento, diaNacimiento);
  
    // Obtiene la fecha actual
    const fechaActual = new Date();
  
    // Calcula la diferencia de años
    let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
  
    // Verifica si todavía no ha tenido su cumpleaños este año
    if (
      fechaActual.getMonth() < fechaNacimientoObj.getMonth() ||
      (fechaActual.getMonth() === fechaNacimientoObj.getMonth() &&
        fechaActual.getDate() < fechaNacimientoObj.getDate())
    ) {
      edad--;
    }
  
    return edad;
  }
  
