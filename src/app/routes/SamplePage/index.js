import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class SamplePage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-left ml-2 headBtnContainer">
          <a className="headBtn active">Dashboard</a>
          <a className="headBtn">API Stacks</a>
          <a className="headBtn">API Chanals</a>
          <a className="headBtn">Settings</a>
        </div>
        {/*
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/> 
        */}
        <div className="d-flex justify-content-left ml-4">
          <h1 className="align-left"><IntlMessages id="pages.samplePage.description"/></h1>
        </div>
        <div className="d-flex justify-content-around gap-3 stacksAPI">
          <div className="apiStack">
            <p className="textApiStack">SFDC</p>
          </div> 
          <div className="apiStack">
            <p className="textApiStack">AWS</p>
          </div> 
          <div className="apiStack">
            <p className="textApiStack">Google</p>
          </div> 
          <div className="apiStack">
            <p className="textApiStack">Adobe</p>
          </div> 
          <div className="apiStack">
            <p className="textApiStack">Database</p>
          </div> 
          <div className="apiStack">
            <p className="textApiStack">Facebook</p>
          </div> 
          <div className="apiStack">
            <p className="textApiStack">MDM</p>
          </div> 
          <div className="apiStack">
            <p className="textApiStack">Shopify</p>
          </div> 
        </div>
      </div>
    );
  }
}

export default SamplePage;