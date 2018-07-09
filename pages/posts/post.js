// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    newsList:[
      {
        titleImage:'/images/avatar/4.png',
        time:'Nov 25 2016',
        tabImage:'/images/post/crab.png',
        content:'"菊黄蟹正肥，品尝秋之味，徐志摩把"看初花的荻芦"和“到楼外吃蟹”并列味秋天来杭州不能错过的风雅之事;用林妹妹的话讲是“蟹封嫩玉双双满”"',
        starNum:'92',
        messageNum:'65'
      },
      {
        titleImage: '/images/avatar/4.png',
        time: 'Nov 25 2016',
        tabImage: '/images/post/crab.png',
        content: '"菊黄蟹正肥，品尝秋之味，徐志摩把"看初花的荻芦"和“到楼外吃蟹”并列味秋天来杭州不能错过的风雅之事;用林妹妹的话讲是“蟹封嫩玉双双满”"',
        starNum: '102',
        messageNum: '55'
      },
      {
        titleImage: '/images/avatar/4.png',
        time: 'Nov 25 2016',
        tabImage: '/images/post/crab.png',
        content: '"菊黄蟹正肥，品尝秋之味，徐志摩把"看初花的荻芦"和“到楼外吃蟹”并列味秋天来杭州不能错过的风雅之事;用林妹妹的话讲是“蟹封嫩玉双双满”"',
        starNum: '82',
        messageNum: '32'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})