// pages/search/search.js
Page({

  data: {
    inputVal: '',
    yourInput: '',
    imageUrls: []
  },
  bindKeyInput: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  bindFocus: function(e){
    this.setData({
      inputVal: this.data.yourInput
    })
  },
  bindBlur: function(e){
    var that = this;
    var queryStr = that.data.inputVal;
    wx.request({
      url: "http://shibe.online/api/shibes?count=" + queryStr,
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        var urls = res.data;
        that.setData({
          yourInput: queryStr,
          inputVal: "共”" + queryStr + "”条记录",
          imageUrls: urls
        })
      }
    });
  },
})