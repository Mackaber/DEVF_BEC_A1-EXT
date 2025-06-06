export default function Header(props) {
    return (
        <header className={props.color}>
            <h1>Bienvenido {props.name}!</h1>
        </header>
    )
}