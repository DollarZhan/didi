import React,{Component} from "react"; //为了一会继承
// import {NavLink } from "react-router-dom";

import "./index.css";
import Swiper from "swiper";
import axios from "axios";

class Technology extends Component{
	constructor(){
		super();

		this.state={
			datalist:[]
		}
		
	}

	render(){
		return (
			<div id="technology">

		    	<div className="top4">
		    		<div className="lefttechnology">
		    			<div className="tech4">滴滴科技</div>
		    			<div className="diditech4">DIDI TECHNOLOGY</div>
		    		</div>
		    		<div className="righttechnology">
		    			<span className="lookmore4">查看更多</span>
		    		</div>
		    	</div>
				
				<div className="swiper-containerC">
		    	<div className="bottom"></div>
					<div className="swiper-wrapper">

						    {
						    	this.state.datalist.map((item)=>
							        <div className="swiper-slide" key={item.id}>
							        	
								        	<div className="middle4">
									        	<img src={item.imgUrl} className="img4"/>
									        </div>
									        <div className="update4">{item.updatedAt.substring(0,10)}</div>
									        <div className="title4">{item.title}</div>			    	

							        </div>


						    		)
						    }
					</div>
			        		<div className="swiper-button-prev"></div>
			        		<div className="swiper-button-next"></div>
								    				    
				</div>
			</div>
		)

	}

	componentDidMount(){

		axios.get("/api/v1/news/getList?rows=3&type=5").then(res=>{
			console.log(res.data.data.data)
			this.setState({
				datalist:res.data.data.data
			},function(){

		var swiper = new Swiper('.swiper-containerC', {
		      slidesPerView: 3,
		            centeredSlides: true,
		            spaceBetween: -100,
		            pagination: {
		              el: '.swiper-pagination',
		              clickable: true,
		            },
		            navigation: {
		              nextEl: '.swiper-button-next',
		              prevEl: '.swiper-button-prev',
		            },

		    });

			})
		})

	}
		
}


export default Technology


