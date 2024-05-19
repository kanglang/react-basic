/*
 * @Author: kanglang
 * @Date: 2024-05-19 18:06:27
 * @LastEditors: kanglang
 * @LastEditTime: 2024-05-19 18:42:37
 * @Description: 请填写简介
 */
import React from 'react'
import './utils/rem'
import './css/bottom.less';
import MyRoutes from './routes/index';


function App() {

  return (
    <>
      <div className="app">
        <div className="body">
          <MyRoutes />
        </div>
      </div>
    </>
  )
}
export default App
