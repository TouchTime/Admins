import React from "react";
import {Row,Col } from "antd";
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import NavLeft from '../src/components/NavLeft';
import './style/common.less';

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
          <Col span="4" className="nav-left">
            <NavLeft/>
          </Col>
          <Col span="20" className="main">
          <Header/>
          <Row className="contnet">
              {/* {this.props.children} */}
              content
          </Row>
          <Footer/>
          </Col>
      </Row>
    );
  }
}
