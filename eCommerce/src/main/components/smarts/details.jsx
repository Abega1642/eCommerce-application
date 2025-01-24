import { Article } from "./article"
import './details.css'
export function Details() {
    return (
        <>
            <main>
                <h1>Greatest articles</h1>
                <section className="articles">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </section>
                
            </main>
        </>
    )
}