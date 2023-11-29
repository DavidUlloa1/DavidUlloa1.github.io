const quotes = [
    "It's dangerous to go alone! Take this. 🗡️",
    "But our princess is in another castle!",
    "Up. The suspect is goin' up",
    "May as well call it dirt. Planet Dirt.",
    "No, it's necessary.",
    "You must construct additional pylons",
    "Hi! I like shorts! They're comfy and easy to wear!",
    "Justice rains from above!"
]

const Custom404 = () => {
    const style = {
        padding: '16px',
        paddingTop: '20vh',
        textAlign: 'center'
    } as React.CSSProperties;

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div style={style}>
            <h1>Error - 404</h1><br></br><br></br>
            <h2>{quote}</h2>
        </div>
    );
}

export default Custom404;