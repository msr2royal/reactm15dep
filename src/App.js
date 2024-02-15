import React, { Component } from 'react';
import './App.css';
import AxiosPostFirebase from './Components/AxiosPostFirebase';
import Calculator from './Components/Calculator';
import ClassComponent from './Components/ClassComponent';
import Functional from './Components/Functional';
import GetApiAxios from './Components/GetApiAxios';
import GetApiFetch from './Components/GetApiFetch';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import OnChange from './Components/OnChange';
import OnClick from './Components/OnClick';
import OnSubmit from './Components/OnSubmit';
import UseEffect from './Components/UseEffect';
import UseFilter from './Components/UseFilter';
import UseMap from './Components/UseMap';
import {UseState} from './Components/UseState';
import {Routes, Route} from 'react-router-dom';
import Hooks from './Components/Hooks';
import Components from './Components/Components';
import UseNavigate from './Components/UseNavigate';
import PreForm from './Components/PreForm';
import Basics from './Components/Basics';
import AdvFormFetching from './Components/AdvFormFetching';
import UseParams from './Components/UseParams';
import ExportComponents from './Components/ExportComponents';

import ExportDef from './Components/ExportDef';
import { ExportC } from './Components/ExportC';
import Multimedia from './Components/Multimedia';
import Images from './Components/Images';
import Audio from './Components/Audio';
import Vedio from './Components/Video';
import UseContext from './Components/UseContext';
import Download from './Components/Download';

export const UserContext =  React.createContext(); //context hook

class App extends Component{ 
  state={
    name:'Aaryan',
    age:'10y'
  }
  render(){
    return (
      <div>  
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/> 

        <Route path="basics" element={<Basics/>}>
           <Route path="usemap" element={<UseMap/>}/>
           <Route path="usefilter" element={<UseFilter/>}/>
        </Route>

        <Route path="export" element={<ExportComponents/>}>
            <Route path="export" element={<ExportC/>}/>
            <Route path="exportdef" element={<ExportDef/>}/> 
        </Route> 

        <Route path="Components" element={<Components/>}>
           <Route path="classcomponents" element={<ClassComponent name={this.state.name}/>}/>
           <Route path="functional" element={<Functional/>}/>
        </Route>
       
        <Route path="hooks" element={<Hooks/>}>
          <Route path="usestate" element={<UseState/>}/>
          <Route path="useeffect" element={<UseEffect/>}/>
          <Route path="usenavigate" element={<UseNavigate/>}/>
          <Route path="useparams/:name?" element={<UseParams/>}/>    
          <Route path="usecontext" element={<UseContext/>}/>          
         
        </Route>

        <Route path="calculator" element={<Calculator/>}/>
        
        <Route path="preform" element={<PreForm/>}>
            <Route path="onclick" element={<OnClick/>}/>
            <Route path="onchange" element={<OnChange/>}/>
            <Route path="onsubmit" element={<OnSubmit/>}/>
        </Route>

        <Route path="advform" element={<AdvFormFetching/>}>
            <Route path="getaxios" element={<GetApiAxios/>}/>
            <Route path="getfetch" element={<GetApiFetch/>}/>
            <Route path="axpostfire" element={<AxiosPostFirebase/>}/>
        </Route> 

        <Route path="multimedia" element={<Multimedia/>}>
            <Route path="images" element={<Images/>}/>
            <Route path="audio" element={<Audio/>}/>
            <Route path="video" element={<Vedio/>}/>
            <Route path="downloads" element={<Download/>} />
        </Route>  
       </Routes> 

      <UserContext.Provider value = {"From UseContext Hook Data here!"}>
        <UseContext/>        
      </UserContext.Provider> 
      </div>
    );
  } 
}

export default App;
