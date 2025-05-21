import { z } from 'https://unpkg.com/zod@3.22.4/lib/index.mjs';

// Definir el esquema de validación
const schema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  edad: z.coerce.number().int().min(0, "Edad inválida"),
  email: z.string().email("Correo inválido"),
  celular: z.string().min(8, "Celular inválido"),
});

// Obtener referencias a los inputs y spans de error
const form = document.querySelector('form');
const [nombre, edad, email, celular] = form.querySelectorAll('input');
const errorSpans = form.querySelectorAll('.error');

// Función para validar y mostrar errores
function validateAndShowErrors() {
  // Obtener valores
  const data = {
    nombre: nombre.value,
    edad: edad.value,
    email: email.value,
    celular: celular.value,
  };

  // Limpiar errores previos
  errorSpans.forEach(span => span.textContent = '');

  // Validar
  const result = schema.safeParse(data);

  if (!result.success) {
    result.error.errors.forEach(err => {
      // Mapear el error al campo correspondiente
      const idx = ['nombre', 'edad', 'email', 'celular'].indexOf(err.path[0]);
      if (idx !== -1) errorSpans[idx].textContent = err.message;
    });
    return false;
  }
  return true;
}

// Validar en tiempo real
form.addEventListener('input', validateAndShowErrors);

// Validar campo individual al hacer blur
[nombre, edad, email, celular].forEach((input, idx) => {
  input.addEventListener('blur', () => {
    // Limpiar error previo solo de este campo
    errorSpans[idx].textContent = '';

    // Validar solo este campo
    const singleField = { 
      nombre: nombre.value, 
      edad: edad.value, 
      email: email.value, 
      celular: celular.value 
    };
    const result = schema.safeParse(singleField);

    if (!result.success) {
      result.error.errors.forEach(err => {
        const errorIdx = ['nombre', 'edad', 'email', 'celular'].indexOf(err.path[0]);
        if (errorIdx === idx) errorSpans[errorIdx].textContent = err.message;
      });
    }
  });
});

// Validar al enviar
form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateAndShowErrors()) {
    alert('¡Formulario válido!');
    // Aquí puedes enviar los datos
  }
});