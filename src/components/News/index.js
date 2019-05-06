import React,{Component} from "react"; //为了一会继承
import "./index.css";
import Swiper from "swiper";
import axios from "axios";

class News extends Component{
	constructor(props){
		super(props);

		this.state={
			datalist:[]
		}
		
	}

	render(){
		return (
			<div id="news">

				<div className="swiper-containerA">
				    <div className="swiper-wrapper">
				    
				    {

				    	this.state.datalist.map((item)=>
				    	
				        <div className="swiper-slide" key={item.id}>
				        	<div className="big">
				        		<div className="left">
				        			<span className="news1">新闻</span><br/>
				        			<span className="news2">News</span>
				        			<div className="a">{item.title}</div>
				        			<div className="b">{item.date.substring(0,10)}</div>
				        			<button>></button><span className="c">进入详情</span>
				        		</div>
					        	<div className="middle">
						        	<img src={item.focus_url} className="img2"/>
						        </div>				    	
				        		<div className="right">
				        			<a href="#/news/newsCenter" className="e">新闻列表</a>
				        			<div className="d">{item.conent}</div>
				        			<div>{item.title}</div><a>进入详情</a><br/><br/>
				        			<div>{item.title}</div><a>进入详情</a><br/><br/>
				        			<div>{item.title}</div><a>进入详情</a><br/><br/>
				        		</div>
				        	</div>

				        	</div>

				    		)
				    	
				    }
				        
				    </div>
				    				    
				</div>
			</div>
		)

	}
	handleClick(){
		this.props.history.push("/news/newsCenter")
	}

	componentDidMount(){

		axios.get("/api/v1/news/getList?rows=4&type=1").then(res=>{
			this.setState({
				datalist:res.data.data.data
			},function(){
		var ASwiper = new Swiper ('.swiper-containerA', {
		    loop: true,
		    
		    autoplay: {
		        delay: 3000
		      },
		  })
				
			})
		})
	}

		
}


export default News


