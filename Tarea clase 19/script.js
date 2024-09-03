// Inicialización del historial como un array vacío
let historial = [];

// Función para agregar una nueva acción al historial
function agregarAccion(id, descripcion) {
    const accion = {
        id: id,
        descripcion: descripcion,
        fecha: new Date().toISOString() // Fecha y hora actual en formato ISO
    };
    historial.push(accion);
}

// Función para eliminar una acción del historial por ID
function eliminarAccionPorId(id) {
    historial = historial.filter(accion => accion.id !== id);
}

// Función para eliminar todo el historial
function eliminarTodoElHistorial() {
    historial = [];
}

// se ejecuta en la consola
agregarAccion(1, "Usuario inició sesión");
agregarAccion(2, "Usuario cambió la contraseña");

console.log("Historial después de agregar acciones:", historial);

eliminarAccionPorId(1);

console.log("Historial después de eliminar la acción con ID 1:", historial);

eliminarTodoElHistorial();

console.log("Historial después de eliminar todo:", historial);




// Función para mostrar todo el historial
function mostrarHistorial() {
    if (historial.length === 0) {
        console.log("El historial está vacío.");
    } else {
        historial.forEach(accion => {
            console.log(`ID: ${accion.id}, Descripción: ${accion.descripcion}, Fecha: ${accion.fecha}`);
        });
    }
}


agregarAccion(1, "Usuario inició sesión");
agregarAccion(2, "Usuario cambió la contraseña");

console.log("Historial completo:");
mostrarHistorial();
