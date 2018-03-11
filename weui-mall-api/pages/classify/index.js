// apps/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 0,
    curIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pageIndex = 0;

    let self = this;

    wx.request({
      url: 'https://api.it120.cc/40yun/shop/goods/category/all',
      success: function (res) {
        let navLeftItems = [{ id: 0, name: "全部" }];
        if (res.data.code == 0) {
          for (var i = 0; i < res.data.data.length; i++) {
            navLeftItems.push(res.data.data[i]);
          }
        }
        self.setData({
          navLeftItems: navLeftItems,
          curNav: 0
        });
        self.getGoodsList(0);
      }
    })
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
    this.getGoodsList(this.data.curNav);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 切换分类 -> 获取当前分类Id编号以及Index
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);

    this.pageIndex = 0;
    this.setData({
      curNav: id,
      curIndex: index
    })
    this.getGoodsList(this.data.curNav);
  },

  // 根据分类获取商品列表
  getGoodsList: function (curNav) {
    if (curNav == 0) {
      curNav = "";
    }

    this.pageIndex++;

    let self = this;

    wx.request({
      url: 'https://api.it120.cc/40yun/shop/goods/list',
      data: {
        page: self.pageIndex,
        pageSize: 6,
        curNav: curNav
      },
      success: function (res) {
        wx.stopPullDownRefresh();

        if (res.data.code != 0 || res.data.data.length == 0) {
          return;
        }

        self.setData({
          navRightItems: self.data.navRightItems.concat(res.data.data)
        });
      }
    })
  }
})