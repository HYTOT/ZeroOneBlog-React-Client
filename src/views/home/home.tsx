import React, { Component } from 'react'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import AsideMenu from '../../components/AsideMenu/AsideMenu'
import BlogItem from '../../components/BlogItem/BlogItem'
import axios from '../../http/axios.config'
import { Technology, Article } from '../../utils/interface'
import './home.scss'
import { Carousel } from 'antd-mobile'

interface IProp {
  history:any
}

interface IState {
  startPoint:number
  touchUp:boolean
  menuUnfold:boolean
  currentGenre:string
  carouselList:Array<string>
  genreList:Array<Technology>
  blogList:Array<Article>
}

let timer:NodeJS.Timeout = setTimeout(() => {}, 0)

class Home extends Component<IProp, IState> {

  state = {
    startPoint: 0,
    touchUp: false,
    menuUnfold: false,
    currentGenre: '全部分类',
    carouselList: ['React.js', 'Vue.js', 'SpringBoot', 'MySQL', 'Nginx'],
    genreList: [],
    blogList: [],
  }

  switchMenu = ():void => {
    this.setState({
      menuUnfold: !this.state.menuUnfold
    })
  }

  getGenres = async ():Promise<void> => {
    const res = (await axios.get('/sys/genre/list')).data
    res && this.setState({
      genreList: res
    })
  }

  getArticles = async ():Promise<void> => {
    const res = (await axios.get('/sys/article/list')).data
    res && this.setState({
      blogList: res
    })
  }

  selectGenre = (genre:Technology):void => {
    this.setState({
      blogList: [],
      menuUnfold: false,
      currentGenre: genre.name,
    })
    this.getArticles()
  }

  componentWillMount():void {
    this.getGenres()
    this.getArticles()
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
        <LogoHeader type={ this.state.currentGenre }
          hide={ this.state.touchUp }
          switchMenu={ this.switchMenu }/>
        <AsideMenu unfold={ this.state.menuUnfold }
          title="技术栈：" switchMenu={ this.switchMenu }
          selectItem={ this.selectGenre }
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
        <section className="blog-list">
          {
            this.state.blogList.map((item:Article) =>
              <BlogItem item={ item } history={ this.props.history }/>
            )
          }
        </section>
      </div>
    )
  }
}

export default Home
