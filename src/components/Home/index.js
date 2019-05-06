import React,{Component} from "react"; //为了一会继承
// import {NavLink } from "react-router-dom";

import "./index.css";
import Swiper from "swiper";
import Navbar from "../Common/Navbar";
import News from "../News";
import MoreOptions from "../MoreOptions";
import Technology from "../Technology";
import Global from "../Global";
import Social from "../Social";
import Cover from "../Cover";


class Home extends Component{
	constructor(props){
		super(props);

		this.state={
			datalist:[]
		}
		
	}

	render(){
		return (
			<div id="navbar">
			      		<Navbar></Navbar>
				          	  <div className="blank"></div>
				      <div className="swiper-container">
				          <div className="swiper-wrapper">
				              <div className="swiper-slide"><Cover/></div>
				              <div className="swiper-slide"><News/></div>
				              <div className="swiper-slide"><MoreOptions/></div>
				              <div className="swiper-slide"><Technology/></div>
				              <div className="swiper-slide"><Global/></div>
				              <div className="swiper-slide"><Social/></div>
				          </div>	          
				      </div>
			      </div>
		)

	}

	componentDidMount(){
		var MySwiper = new Swiper ('.swiper-container', {
		    direction: 'vertical',
		    loop: true,
		    


	      mousewheel: true,
		  })
	}


		
}


export default Home


