import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import GoogleLogin from '../social/GoogleLogin';
import FacebookLogin from '../social/FacebookLogin';

class NavR extends Component {
    render() {
        return (
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="./index.html" className="brand-logo">
                        <img height="65px" src="recursos/logos/imax-logo.svg" alt="Logo" />
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="sass.html">Sass</a>
                        </li>
                        <li>
                            <a href="badges.html">Components</a>
                        </li>
                        <li>
                            <a href="collapsible.html">JavaScript</a>
                        </li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li>
                            <a href="sass.html">Sass</a>
                        </li>
                        <li>
                            <a href="badges.html">Components</a>
                        </li>
                        <li>
                            <a href="collapsible.html">JavaScript</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab">
                            <a id="btnPestEbay" className="btnPest">Ebay</a>
                        </li>
                        <li className="tab">
                            <a id="btnPestBestbuy" className="btnPest">BestBuy</a>
                        </li>
                        <li className="tab">
                            <a id="btnPestExtra" className="btnPest active" >Extras</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

class SearchR extends Component {
    render() {
        return (
            <div className="cardFiltro col s12 m4">
                <fieldset>

                    <div className="input-field col s12">
                        <input id="fBusqueda" type="text" className="validate" />
                        <label htmlFor="fBusqueda">Filtro</label>
                    </div>

                    <div className="col s12">
                        <a id="fBtnSearch" className="waves-effect waves-light btn">
                            <i className="material-icons right">search</i>Buscar</a>
                    </div>

                    <div className="col s12">
                        <ul id="dropCat" className="dropdown-content">
                            <li><a className="dCat" id="cat0">Smartphones</a></li>
                            <li><a className="dCat" id="cat1">TV y Health</a></li>
                            <li><a className="dCat" id="cat2">Fitness and Beauty</a></li>
                        </ul>
                        <a id="dropCatA" className="btn dropdown-button" data-activates="dropCat">Categoría
                            <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </div>

                    <div className="col s12">
                        <ul id="dropBrand" className="dropdown-content">
                            <li><a className="dBra" id="bra">Todas</a></li>
                            <li><a className="dBra" id="braApple">Apple</a></li>
                            <li><a className="dBra" id="braSamsung">Samsung</a></li>
                            <li><a className="dBra" id="braNokia">Nokia</a></li>
                            <li><a className="dBra" id="braLg">LG</a></li>
                        </ul>
                        <a id="dropBrandA" className="btn dropdown-button" data-activates="dropBrand">Marca
                            <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </div>

                    <div id="selOrder" className="input-field col s12">
                        <select className="selSort">
                            <option value="asc" defaultValue >Precio ascendente</option>
                            <option value="desc">Precio descendente</option>
                        </select>
                        <label>Orden</label>
                    </div>

                    <div className="input-field col s12">
                        <input min="1" placeholder="Ej: 75" id="maxPrice" type="number" className="validate" />
                        <label htmlFor="maxPrice">Precio máximo</label>
                    </div>

                </fieldset>
            </div>
        )
    }
}

class MacbookR extends Component {
    render() {
        return (
            <div>
                <h5 className="header">MacBook Pro 15 i7 7700HQ</h5>
                <div className="card horizontal">
                    <div className="cardImg card-image">
                        <img src="recursos/macbookpro.jpg" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>Se vende portatil en perfecto estado, pasa por nuevo. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Nam ad quod aliquam unde quisquam voluptatibus vitae suscipit magni voluptate ten... </p>
                        </div>
                        <div className="card-action">
                            <a href="#">Abrir información.</a>
                            <a href="#">Agregar al carrito.</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class SpinerR extends Component {
    render() {
        return (
            <div className="col s12 prelo none">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class PestaR extends Component {
    render() {
        return (
            <div>
                <div id="PestEbay" className="col s12 m8 pest none">
                    <SpinerR />

                </div>
                <div id="PestBestbuy" className="col s12 m8 pest none">
                    <SpinerR />

                </div>
                <div id="PestExtra" className="col s12 m8 pest">
                    <SpinerR />
                    <div className="col s6">
                        <div className="parentPaginator col s12">
                            <div id="pagination-1"></div>
                        </div>
                        <div id="eResults" className="col s12"></div>
                    </div>
                    <div className="col s6">
                        <div className="parentPaginator col s12">
                            <div id="pagination-2"></div>
                        </div>
                        <div id="bResults" className="col s12"></div>
                    </div>
                </div>
            </div>
        )
    }
}

class FooterR extends Component {
    render() {
        return (
            <div className=" ">
                <footer id="footer" className="page-footer col s12">
                    <div className="col l6 s12">
                        <h5 className="white-text">Información de interes</h5>
                        <p className="grey-text text-lighten-4">Aquí puedes encontrar los enlaces a
                            GitHub de cada miembo y el repositorio del proyecto.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Enlaces</h5>
                        <ul>
                            <li>
                                <a className="grey-text text-lighten-3" href="#!">Daniel Afonso</a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="#!">Luis</a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="#!">Pascolo</a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3" href="#!">GitRepo</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="container">
                            © 2018 DaJeLu Copyright
                            <a className="grey-text text-lighten-4 right" href="https://creativecommons.org/licenses/by/4.0/">
                                <img height="25px" src="./recursos/logos/creative.svg" alt="Logo" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export class RenderizarR extends Component {
    render() {
        return (
            <div className="cont">
                <div id="rowPrincipal" className="row">
                    <NavR />
                    <SearchR />
                    <PestaR />
                    <FooterR />
                </div>
            </div>
        )
    }
}











