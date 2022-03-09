import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Home/Home";

const FADE = {
    IN: 'animate__slideInDown',
    OUT: 'animate__slideOutUp'
}

interface AppState {
    isMenuOpen?: boolean;
    fade?: string;
    currentRoute?: string;
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {isMenuOpen: false, currentRoute: 'Home'};
    }

    toggleMenu = () => {
        if (this.state.isMenuOpen) {
            this.setState({
                fade: FADE.OUT
            });
            setTimeout(() => {
                this.setState({isMenuOpen: !this.state.isMenuOpen});
            }, 400)
        } else {
            this.setState({
                isMenuOpen: !this.state.isMenuOpen,
                fade: FADE.IN
            });
        }
    }

    render() {
        return (<>
            <div className={'container'}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </>);
    }
}

export default App;
