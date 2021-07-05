console.log('app.js is running');

//JSX - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'This is a great app',
    options: []
};

//Form submit function
const formSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

//Remove all function
const removeall = () => {
    app.options = [];
    render();
};

const randomgen = () => {
    const randnum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randnum];
    alert(option);
}

const appRoot = document.getElementById('app');

//Render function
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options Available'}</p>
            
            <button disabled={app.options.length === 0} onClick={randomgen}>Random</button>
            <button onClick={removeall}>Remove</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};


render();
 
