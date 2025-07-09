import { useForm } from 'react-hook-form'
export default function FormularioReactHookFormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <h2>Formulario usando React Hook Form con Validación</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                Name: <input {...register('name', { required: "El nombre es requerido" })} /><br />
                Last Name:<input {...register('lastName')} /><br />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                Email <input {...register('email', { 
                    required: "El email es obligatorio", 
                    pattern: { 
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
                        message: "Formato inválido" } 
                    })} 
                /><br />
                <input type='submit' value='enviar' />
            </form>
        </>
    )
}