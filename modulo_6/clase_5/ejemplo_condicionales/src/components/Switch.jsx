import Component from "./Component"
export default function Switch({ color }) {
    switch(color) {
        case "black":
            return (<Component renderType="Your picked color is black" />)
        case "red":
            return (<Component renderType="Your picked color is red" />)
        case "blue":
            return (<Component renderType="Your picked color is blue" />)
        case "green":
            return (<Component renderType="Your picked color is green" />)
        default:
            return (<Component renderType="Your picked color is default" />)
    }
}