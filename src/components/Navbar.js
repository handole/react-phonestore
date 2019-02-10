import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="content">
          <div className="jumbotron">
            <h1 className="display-4">Hello, Folks!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>            
          </div>
          <div>
            <ul className="list-unstyled">
                <li className="media">
                    <img src="https://handole.github.io/assets/img/portfolio/home-pc.png" width="120" height="128" className="mr-3" alt="pecanducoffee" />
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">Pecandu Coffee</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media my-4">
                    <img src="https://handole.github.io/assets/img/portfolio/pesonamalahayu.jpg" width="120" height="128" className="mr-3" alt="pesonamalahayu" />
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media">
                    <img src="https://handole.github.io/assets/img/portfolio/crbtoyota.png" width="120" height="128" className="mr-3" alt="Toyota" />
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Portofolio() {
  return (
    <div className="container">
      <div className="card-deck">
        <div className="card">
            <img src="https://handole.github.io/assets/img/portfolio/home-pc.png" width="240" height="240" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div className="card">
            <img src="https://handole.github.io/assets/img/portfolio/pesonamalahayu.jpg" width="240" height="240" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div className="card">
            <img src="https://handole.github.io/assets/img/portfolio/crbtoyota.png" width="240" height="240" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div class="card mb-3 container">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
  )
}

// function ListView() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="content">
//           <h1> Ini untuk halaman List View</h1>
//           <ul>
//            <Link to='user/hilman'>Hilman</Link>
//            <br/>
//            <Link to='user/robert'>Robert</Link>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DetailView({match}) {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="content">
//           <h1> Ini untuk halaman Detail</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

function Nomatch() {
  return (
    <div className="container">
      <div className="row">
        <div className="content">
          <h1> 404, Halaman ini belum siap</h1>
        </div>
      </div>
    </div>
  )
}

export default class Navbar extends Component {
    render() {
        return(
        <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portofolio">Portofolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>

          <main>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/portofolio' exact component={Portofolio} />
            <Route path='/about' exact component={About} />
            {/* <Route path='/user/:name' exact component={DetailView} /> */}
            <Route component={Nomatch} /> 
            </Switch>
          </main>
        </div>
        </BrowserRouter>
        )
    }
}
