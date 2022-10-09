export default function newJoke() {
    return (
        <div>
            <p>Create A New Joke</p>
            <form action="#">
                <div>
                    Joke Name:
                    <input type="text" id="jokeName" />
               </div>
               <div>
                    Content <textarea id="jokeContent" /> 
               </div>
               <div>
                    <button type="submit">Add</button> 
                </div> 
            </form>
        </div>
    );
}