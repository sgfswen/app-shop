import React,{Component} from 'react'

class Nav extends Component{
    render(){
        return(
            <nav id="nav">
                <ul className="navlist">
                    <li id="n_0"><a href="#"><span className="active"></span></a></li>
                    <li id="n_1"><a href="#" ><span></span></a></li>
                    <li id="n_2"><a href="#" ><span></span></a></li>
                    <li id="n_3"><a href="#" ><span></span></a></li>
                </ul>
            </nav>
        )
    }
}


export default Nav;