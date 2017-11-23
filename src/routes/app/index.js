/**
 *  Author: harry.lang
 *  Date: 2017/11/20
 *  Description: Created by harrylang on 2017/11/20.
 */
import ProxyComponent from 'ProxyComponent';

import './style/style.css';

class App extends ProxyComponent {
    render() {
        return <div className="app">
            <h1>App</h1>

            <div className="img"></div>
        </div>;
    }
}

export default App;