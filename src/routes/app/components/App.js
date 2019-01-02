/*
 * @Author: harry.lang 
 * @Date: 2018-03-20 14:52:04 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2019-01-02 12:45:40
 */
import React from 'react';
import { DatePicker, Button, Dropdown, Menu, Icon } from 'antd';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from '../assets/app.less';
import Title from './Title';
import Table from './Table';

class App extends React.Component {

    changeTitle() {
        this.props.updateTitle('app-' + (+new Date));
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const { app, match } = this.props;

        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );

        return <div styleName="app">
            <Switch>
                <Route path={`${match.url}/test`} component={
                    Loadable({
                        loader: () => import(/* webpackChunkName: "app-test" */'../routes/test'),
                        loading: () => null
                    })
                } />
            </Switch>

            <Title>{app.title}</Title>
            <DatePicker />
            <Button type="primary">Primary</Button>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>

            <div styleName="img" onClick={this.changeTitle.bind(this)}></div>
            <Table list={app.list}></Table>
        </div>;
    }
}

export default CSSModules(App, styles);