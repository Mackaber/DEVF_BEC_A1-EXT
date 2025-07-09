import { useForm } from 'react-hook-form'
export default function FormularioReactHookForm() {
    const { register, handleSubmit } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <h2>Formulario usando React Hook Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                Name: <input {...register('name')} /><br />
                Last Name:<input {...register('lastName')} /><br />
                <input type='submit' value='enviar' />
            </form>
        </>
    )
}