# Formularios avanzados y validación con React

- Entender el uso de React Hook Form.

```bash
npm i react-hook-form
```

```jsx
// Formulario.jsx
import { useForm } from 'react-hook-form'

export defualt function Formulario() {
    const { register, handleSubmit } = useform()

    function onSubmit(data) {
        // Hacer algo con data...
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('Nombre del campo')} />
            <input type='submit' />
        </form>
    )
}

```

- Aprender a validar formularios en React.
    - zod
    - yup
    - joi
- Gestionar errores y mostrar feedback.
- Configurar inputs controlados vs no controlados.