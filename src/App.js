import React, { Component } from 'react';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './components/Navbar';
import Navbar from './components/Navbar';
// import List from './List';

class App extends Component {
  render() {
    return (
      <Navbar />
    )
  }
}

// function Home() {
//   return <h2> Halaman Home </h2>
// }

// function ListView() {
//   return (
//     <div>
//       <h2> Semua User </h2>
//       <ul>
//         <Link to='user/hilman'>Hilman</Link>
//         <br/>
//         <Link to='user/robert'>Robert</Link>
//       </ul>
//     </div>
//   )
// }

// function DetailView({ match }) {
//   return <h2> Ini Halaman {match.params.name} </h2>
// }

// function NoMatch() {
//   return <h2> 404, Halaman belum ditemukan!!!</h2>
// }

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       items : [],
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => this.setState({ items: data, isLoading: false }))
//   }

  // render() {
    // const { items, isLoading } = this.state

    // if(isLoading) {
    //   return <p>Loading.....</p>
    // }
//     return(
  
//         <BrowserRouter>
//           <div>
//             <nav>
//               <li><Link to='/'> Home </Link></li>
//               <li><Link to='/users'> User </Link></li>
//             </nav>

//             <main>
//               <Switch>
//               <Route path='/' exact component={Home} />
//               <Route path='/users' exact component={ListView} />
//               <Route path='/user/:name' exact component={DetailView} />
//               <Route component={NoMatch} /> 
//               </Switch>
//             </main>
//           </div>
//         </BrowserRouter>

//     )
//   }
// }

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       todoItem: '',
//       items: []
//     }
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.setState({
//       items : [...this.state.items, this.state.todoItem],
//       todoItem : ''
//     })
//   }

//   handleChange = (event) => {
//     this.setState({
//       todoItem: event.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input value={this.state.todoItem} onChange={this.handleChange} />
//           <button>Add</button>
//         </form>
 
//         <List items={this.state.items} />
//       </div>);
//   }
// }

export default App;