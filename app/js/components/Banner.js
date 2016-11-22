import React,{Component} from 'react'
import ReactSwipe from 'react-swipe'

class Banner extends Component{

    render(){
        return (
            <ReactSwipe className=" indexslider carousel" swipeOptions={{continuous: false}}>
                <div>
                    <img src="dist/img/sliderbanner/1.jpg" />
                    <div className="topzhezhao">
                        <div className="leftslidecontent">
                            <p>微信价<span>500元</span></p>
                            <p>这里地描述吧这里是简单地描述吧</p>
                        </div>
                        <a href="#">立即购买</a>
                    </div>
                </div>
                <div>
                    <img src="dist/img/sliderbanner/2.jpg" />
                    <div className="topzhezhao">
                        <div className="leftslidecontent">
                            <p>微信价<span>500元</span></p>
                            <p>这里是简单地描述吧这里是简单地描述吧这里是简单地描述吧</p>
                        </div>
                        <a href="#">立即购买</a>
                    </div>
                </div>
            </ReactSwipe>
        )
    }
}


export default Banner;
