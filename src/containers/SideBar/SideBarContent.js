import React from 'react';
import CustomScrollbars from 'util/CustomScrollbars';
import Navigation from "../../components/Navigation";

//import companyLogo from './src/assets/images/logo.png';

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: 'pages.samplePage',
      type: 'item',
      link:'/app/sample-page'

    },
  ];

  return (
    
    <CustomScrollbars className="scrollbar">
      <div>
        <img className="headImgLogo" src={require("assets/images/logo.png")} alt="jambo" title="jambo"/>
      </div>
      <Navigation menuItems={navigationMenus}/>
      <li className="scrollbar active">SFDC</li>
      <li className="scrollbar">AWS</li>
      <li className="scrollbar">Google</li>
      <li className="scrollbar">Adobe</li>
    </CustomScrollbars>
  );
};

export default SideBarContent;
