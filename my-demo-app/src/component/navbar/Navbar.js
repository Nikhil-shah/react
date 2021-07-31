import React, { Component } from 'react';
import {MenuItems, HomeSubMenuItems, ProductSubMenuItems, ServiceSubMenuItems} from "../../data/MenuItems";
import './Navbar.css';
import { Button } from '../button/Button';
import { Toast } from 'primereact/toast';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false, 
            title: 'Home', 
            subMenu: HomeSubMenuItems,
            selectSubMenu: ''
        };
        this.showToast = this.showToast.bind(this);
    }
   
    handleClick= () => {
        this.setState({clicked: !this.state.clicked });
    }

    showToast = selectSubMenu => e => {
        this.toast.show({severity:'info', summary: 'It Works!!', detail:'You clicked on ' + selectSubMenu, life: 3000});
        document.getElementById("mySidenav").style.width = "0px";
    }

    openNav= title => e => {
        console.log(title);
        this.setState({title: title });
        console.log('title - ' + this.state.title);
        if(title === 'Serives') {
            this.setState({ subMenu: ServiceSubMenuItems });
        } else if (title === 'Products') {
            this.setState({ subMenu: ProductSubMenuItems});
        } else {
            this.setState({ subMenu: HomeSubMenuItems});
        }        
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav= () => {
        document.getElementById("mySidenav").style.width = "0px";
    }
    
    render() {
        return(
            <div>
                 <Toast ref={(el) => this.toast = el} position="bottom-right"  />
                <div className="topnav">
                    <Button>Sign Up</Button>
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <a className={item.cName} href="javascript:void(0)" onClick={this.openNav(item.title)}>
                                    {item.title}
                                </a>
                            )
                        })
                    }
                    <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                    
                </div>

                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    {
                        this.state.subMenu.map((item, index) => {
                            return (
                                <a onClick={this.showToast(item)}> 
                                     {item}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;