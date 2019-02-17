import React, {Component} from 'react';
import AddTodo from "./containers/AddTodo";
import './App.scss'
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import UndoRedo from "./containers/UndoRedo";

class App extends Component {

    render() {
        return (
            <div className="App">
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
                <UndoRedo/>
            </div>
        );
    }

}

export default App;
