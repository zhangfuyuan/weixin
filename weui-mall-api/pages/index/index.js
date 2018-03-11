// pages/index/index.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0, 
    goods: [],
    activeCategoryId: 0,
    loadingMoreHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pageIndex = 0;
    let self = this;

    // 从服务器获取轮播图组
    wx.request({
      url: 'https://api.it120.cc/40yun/banner/list',
      data: {
        key: 'mallName'
      },
      success: function (res) {
        if (res.data.code == 404) {
          wx.showModal({
            title: '提示',
            content: '请在后台添加 banner 轮播图片',
            showCancel: false
          })
        } else {
          self.setData({
            banners: res.data.data
          });
        }
      }
    })

    // 从服务器获取推荐商品数据
    this.getGoodsList(0);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getGoodsList(0);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 以下为自定义函数
   */
  // 点击搜索框 -> 显示输入框
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  // 点击取消 -> 隐藏输入框
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  // 点击交叉 -> 清空输入框
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  // 输入期间 -> 获取输入值
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 轮播图切换处理函数
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  // 轮播图点击处理函数
  tapBanner: function () {
    console.log('点击了轮播图！');
  },
  // 获取推荐商品列表
  getGoodsList: function (categoryId) {
    if (categoryId == 0) {
      categoryId = "";
    }

    this.pageIndex++;

    let self = this;

    wx.request({
      url: 'https://api.it120.cc/40yun/shop/goods/list',
      data: {
        page: self.pageIndex,
        pageSize: 6,
        categoryId: categoryId
      },
      success: function (res) {
        wx.stopPullDownRefresh();

        if (res.data.code != 0 || res.data.data.length == 0) {
          self.setData({
            loadingMoreHidden: false
          })
          return;
        }

        self.setData({
          goods: self.data.goods.concat(res.data.data)
        });
      }
    })
  },
  // 点击商品跳至详情页面
  toDetailsTap: function () {
    console.log('点击了商品！');
  }

})