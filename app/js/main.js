import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Nav  from './components/Nav'
import Banner  from './components/Banner'
import Lists from './components/Lists'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    key:1,
                    aLink:'http://www.baidu.com',
                    attrss:'百度',
                    imgurl:'./dist/img/product/product1.png',
                    p1:'哈哈哈哈百度',
                    p2:'简介这里简介这里简介这里简介这里简介这里简介这里简介这里简介介这里简介',
                    p3:'￥5000'
                },
                {
                    key:2,
                    aLink:'http://www.qq.com',
                    attrss:'腾讯',
                    imgurl:'./dist/img/product/product1.png',
                    p1:'哈哈哈哈腾讯',
                    p2:'简介这里简介这里简介这里简介这里简介这里简介这里简介这里简介介这里简介',
                    p3:'￥6600'
                },
                {
                    key:3,
                    aLink:'http://www.dd.com',
                    attrss:'呵呵',
                    imgurl:'./dist/img/product/product1.png',
                    p1:'哈哈哈哈腾讯',
                    p2:'简介这里简介这里简介这里简介这里简介这里简介这里简介这里简介介这里简介',
                    p3:'￥6600'
                }
            ]
        }
    }

    render () {
        return (
            <div className="app">
                <Nav/>
                <Banner/>
                <Lists data={this.state.data} />
            </div>
        )
    }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
