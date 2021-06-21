// index.js
// 获取应用实例
const app = getApp()
var API_URL = 'http://shibe.online/api/shibes?count=10'
Page({
  data: {
    imageUrls: []
  },
  onLoad: function () {
    var that = this;
    wx.showToast({ // 这里目前没有显示 | 找到错误原因，onLoad写成了onload!!
      title: '加载中...',
      icon: 'loading',
      duration: 100000
    });
    wx.request({
      url: API_URL,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideToast();
        // console.log(res.data);
        that.setData({
          imageUrls: res.data
        })
      }
    });
  }
})