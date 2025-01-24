import './button.css'

export function Button ({label, action}) {
    return (
        <>
            <button onClick={action}>{label}</button>
        </>
    )
}