import { useState } from "react"
import Component from "./Component"

export default function Conditionalif({ conditional }) {
    if (conditional) {
        return (<Component renderType="Condicional If en true" />)
    } else {
        return (<Component renderType="Condicional If en false" />)
    }
}
