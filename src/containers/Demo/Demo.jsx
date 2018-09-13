/**
 * Created by summer on 2018/9/13.
 */
import React, { Component } from 'react';

import Header from '../../components/Header';
import request from '../../modules/Request';
import API from '../../api/api-config';
import './Demo.scss';

export default class Demo extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async (params = {}) => {
        const response = await request.get(API.AUTHOR_INFO, params);
        console.log('response', response);
    };

    render() {
        return (
            <div className="demo-wrapper">
                <Header />
            </div>
        )
    }
}