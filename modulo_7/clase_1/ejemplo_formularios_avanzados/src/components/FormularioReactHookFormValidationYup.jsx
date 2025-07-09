import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
    name: yup.string().required("El nombre es requerido"),
    email: yup.string().email("Email inválido").required("El email es requerido")
}).required()

export default function FormularioReactHookFormValidationYup() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({ resolver: yupResolver(schema)})

    function onSubmit(data) {
        console.log(data)
    }

    function activarErrorCustomizado() {
        setError("general", { type: "manual", message: "Este es un error Customizado!" })
    }

    async function validateFn(value) {
        // Si se utiliza un resolver, la función del resolver remplazaría ésta.
        
        // fetch()
        console.log("iniciando timeout")
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`El Apellido ${value} ya está ocupado`)
            }, 3000)
        })
    }

    return (
        <>
            <h2>Formulario usando React Hook Form con Validación con Yup</h2>
            {errors.general && <p style={{ color: 'red' }}>{errors.general.message}</p>}
            <form onSubmit={handleSubmit(onSubmit)} >
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                Name: <input {...register('name')} /><br />
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
                Last Name:<input {...register('lastName', { validate: validateFn })} /><br />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                Email <input {...register('email')}
                /><br />
                <input type='submit' value='enviar' />
            </form>
            <button onClick={activarErrorCustomizado}>Activar error Customizado</button>
        </>
    )
}