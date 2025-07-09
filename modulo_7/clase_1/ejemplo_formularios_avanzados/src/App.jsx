import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import FormularioReactHookForm from './components/FormularioReactHookForm'
import FormularioTradicional from './components/FormularioTradicional'
import FormularioReactHookFormValidation from './components/FormularioReactHookFormValidation'
import FormularioReactHookFormValidationYup from './components/FormularioReactHookFormValidationYup'

function App() {
  return (
    <>
      <FormularioTradicional />
      <FormularioReactHookForm />
      <FormularioReactHookFormValidation />
      <FormularioReactHookFormValidationYup />
    </>
  )
}

export default App
