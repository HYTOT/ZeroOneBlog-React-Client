import React, { Component } from 'react'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import AsideMenu from '../../components/AsideMenu/AsideMenu'
import axios from '../../http/axios.config'
import { Technology } from '../../utils/interface'
import './home.scss'
import { Carousel } from 'antd-mobile'

interface IProp {
  
}

interface IState {
  startPoint:number
  touchUp:boolean
  menuUnfold:boolean
  genreList:Array<Technology>
  carouselList:Array<string>
}

let timer:NodeJS.Timeout = setTimeout(() => {}, 0)

class Home extends Component<IProp, IState> {

  state = {
    startPoint: 0,
    touchUp: false,
    menuUnfold: false,
    genreList: [],
    carouselList: ['React.js', 'Vue.js', 'SpringBoot', 'MySQL', 'Nginx']
  }

  switchMenu = ():void => {
    this.setState({
      menuUnfold: !this.state.menuUnfold
    })
  }

  getGenre = async ():Promise<void> => {
    const res = (await axios.get('/sys/genre/list')).data
    res && this.setState({
      genreList: res
    })
  }

  componentWillMount():void {
    this.getGenre()
  }

  componentDidMount():void {
    document.ontouchstart = (e:TouchEvent) => {
      this.state.menuUnfold
      || this.setState({
        startPoint: e.touches[0].pageY
      })
    }
    document.ontouchmove = (e:TouchEvent) => {
      clearTimeout(timer)
      this.state.menuUnfold
      || (timer = setTimeout(() => {
        this.setState({
          touchUp : this.state.startPoint > e.changedTouches[0].pageY
        })
      }, 100))
    }
  }

  render() {
    return (
      <div className="home">
        <LogoHeader hide={ this.state.touchUp }
          switchMenu={ this.switchMenu }/>
        <AsideMenu unfold={ this.state.menuUnfold }
          title="技术栈：" switchMenu={ this.switchMenu }
          list={ this.state.genreList }/>
        <Carousel autoplay infinite
          dotStyle={{ background: 'white' }}
          dotActiveStyle={{
            background: '#61dafb',
            boxShadow: '0 0 2vw #61dafb',
          }}>
          {
            this.state.carouselList.map((item:string) => 
              <div className="carousel-item">{ item }</div>
            )
          }
        </Carousel>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
        <h1 className="test">Test</h1>
      </div>
    )
  }
}

export default Home
