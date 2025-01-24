import { Button } from "../dumbs/unchanged/buttons";
import './article.css';


export function Article () {

    const buy = () => {
        console.log("Buy"); 
    }

    return (
        <>
            <div className="card">
                <img src="image.png" alt="image of the article" />
                <h4>Name of the article</h4>
                <p>Some details of the article</p>
                <div>
                    <Button label="Buy" action={buy}/>
                </div>
            </div>
        </>
    )
}