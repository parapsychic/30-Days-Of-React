import './App.css';

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const Header = (props) => (
  <div>
   <h1>{props.string_prop}</h1>
   <p>{props.arr}</p>
   <p>{props.person.name}</p>
  </div>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)


const DestructuredParagraph = ({data:{
  string_prop,
  author:{firstname, lastname}
}}) => (
  <div>
    <p>{string_prop}</p>
    <p>{firstname}</p>
    <p>{lastname}</p>
  </div>
)

function App() {
  const data = {
    string_prop: "I am a prop",
    author: {
      firstname: 'Para',
      lastname: 'Psychic'
    }
  }

  const person = new Person("ParaPsychic", 10);

  //trying spread
  const newPersonWithBooks = {...person, books:'No Books ever'};

  return (
    <div className="App">
      <Header string_prop = "Hello World" arr={['A', 'B']} person = {new Person("Para", 10)}/>
      <Button text="Say HI" onClick={() => alert("HI")} />
      <DestructuredParagraph data={data} />
      <p>{newPersonWithBooks.name + newPersonWithBooks.age}</p>
    </div>
  );
}

export default App;
