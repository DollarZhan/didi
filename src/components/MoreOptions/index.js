import React,{Component} from "react"; //为了一会继承
// import {NavLink } from "react-router-dom";

import "./index.css";
import Swiper from "swiper";

class MoreOptions extends Component{
	constructor(){
		super()
		
	}

	render(){
		return (
			<div id="moreoptions">

				<div className=" swiper-containerB">
					<div className="swiper-wrapper">
						<div className="swiper-slide">Slide 111</div>
						<div className="swiper-slide">Slide 222</div>
						<div className="swiper-slide">Slide 333</div>
					</div>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
								    				    
				</div>
			</div>
		)

	}
	next(){
		console.log(111)
	}

	componentDidMount(){
		 new Swiper ('.swiper-containerB', {
		   // direction: 'horizontal',
		    loop: true,
		    
		    // 如果需要分页器

		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },

		    
		    // 如果需要滚动条


		  })
	}
		
}


export default MoreOptions


