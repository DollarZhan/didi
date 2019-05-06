import React,{Component} from "react"; //为了一会继承
// import {NavLink } from "react-router-dom";

import "./index.css";
import Swiper from "swiper";
import axios from "axios";
import Navbar from "../Common/Navbar";

class News extends Component{
	constructor(props){
		super(props);

		this.state={
			datalist:[]
		}
		
	}

	render(){
		return (
			<div id="outer">

			<Navbar></Navbar>
			<div class="swiper-containerD">
			    <div class="swiper-wrapper">

			    	{

	    		    	this.state.datalist.map((item)=>
	    			        <div className="swiper-slide" key={item.id}>
									<div className="bottom-1"></div>
									<div className="top-1">
										<div className="title-1">{item.title}</div><br/>
										<div className="desc-1">{item.desc}</div>

									</div>
	    			        	
	    				        	<div className="middle-1">
	    					        	<img src={item.imgUrl} className="img-1"/>
	    					        </div>
	    			        </div>


			    		    		)
			    	}
			     
			    </div>
			  </div>

			</div>
		)

	}

	componentDidMount(){

		axios.get("/api/v1/news/getList?rows=3&type=2").then(res=>{
			this.setState({
				datalist:res.data.data.data

			},function(){
				var mySwiper = new Swiper('.swiper-containerD', {
					autoplay: true,
					loop : true,
				})
				
			})
		})

	}


		
}


export default News


