/*
 * @Author: kanglang
 * @Date: 2024-05-19 18:06:27
 * @LastEditors: kanglang
 * @LastEditTime: 2024-05-19 19:01:29
 * @Description: 请填写简介
 */
import { Space, Image, Grid, Swiper, Toast, Avatar } from 'antd-mobile';
import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { RelativeRoutingType, To, json, useNavigate } from 'react-router-dom';
import { AntOutline, RightOutline, LeftOutline } from 'antd-mobile-icons'
import AvatarImg from '../../../src/assets/imgs/my_shop.png';
import lunbo2 from '../../../src/assets/imgs/lunbo2.png';
import lunbo1 from '../../../src/assets/imgs/lunbo1.png';
import bgimg from '../../../src/assets/imgs/bg.png';
import '../../../src/css/bottom.less'
import headerBg from '../../assets/imgs/header-bg.png'
import api from '../../config/api';

const Home = () => {
  const navigate = useNavigate();
  const [currentShop, setCurrentShop] = useState({});
  const [bannerList, setBannerList] = useState([{ url: lunbo2 }, { url: lunbo1 }])

  // 需要在路由收尾哪里判断

  const imgs = [
    headerBg,
    bgimg
  ]
  useLayoutEffect(() => {
    const cacheShop = window.localStorage.getItem("current_shop");
    if (cacheShop) {
      const parseCacheShop = JSON.parse(cacheShop)
      setCurrentShop(parseCacheShop)
    } else {
      api.getAllShop().then(res => {
        if (res.status == 20000 && res.data && res.data.length) {
          const shopList = res.data;
          window.localStorage.setItem('current_shop', JSON.stringify(shopList[0]))
          setCurrentShop(shopList[0]);
        }
      });
    }
  }, []);

  const getBanner = (currentShop) => {
    api.getBanner(currentShop.id).then(banner => {
      if (banner.status == 20000 && banner.data && banner.data.length) {
        const bannerList = banner.data;
        setBannerList(bannerList)
      }
    })
  }

  const items = bannerList.map((img, index) => (
    <Swiper.Item key={index}>
      <Image fit='fill' src={img.url} height={300} />
    </Swiper.Item>
  ))
  return (
    <div style={{ flex: 1 }} className='app'>
      <div className={"body"}
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
        <div style={{
          display: "flex",
          width: '100%',
          height:"59px",
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: "#ff6a00",
          backgroundSize: '100%,100%',
        }}
          onClick={() => {
            // navigate('/shopDetail', { state: { store_id: currentShop.id } })

          }}
        >

          <div style={{ display: "flex",flex:1, justifyContent: 'space-between',alignItems:'center' }}>
            {/* <Image fit='fill' src={lunbo2} height={50} alt='速配商铺网' /> */}
            <div style={{ fontSize: "26px", color: '#fff' ,fontFamily:'fantasy',marginLeft: "60px", }}>速配商铺网</div>
            <div style={{ fontSize: "18px", color: '#fff' ,fontFamily:'fantasy',marginRight:"100px"}}>登录</div>
          </div>
        </div>
        <div style={{ marginTop: "2px", width: '100%' }}>
          <Swiper autoplay>{items}</Swiper>
        </div>
        <div style={{ marginTop: "8px", width: '100%', backgroundColor: 'white', paddingTop: "16px", paddingBottom: "16px", marginLeft: "8px", marginRight: "8px", borderRadius: "8px" }}>
          
        </div>
      </div>
    </div >
  );
}

export default Home;