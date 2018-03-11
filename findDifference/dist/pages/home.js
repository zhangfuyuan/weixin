'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '找找不同',
      usingComponents: {
        'wxc-progress': '../../packages/@minui/wxc-progress/dist/index'
      }
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      isStart: false,
      isOver: false,
      countMin: 0,
      countSec: 1,
      curViewIndex: 0,
      grade: 0,
      timer: null,
      screenWidth: 0,
      percent: 20,
      touchClass: '',
      touchIndex: 0,
      isBoxShow: false,
      isOverShow: false,
      userInfo: {
        nickName: '加载中...'
      },
      audioContext: null,
      audioURL: 'http://7xnvmn.com1.z0.glb.clouddn.com/%E6%B8%B8%E6%88%8F%E5%8E%9F%E5%A3%B0-%E5%A4%A9%E5%A4%A9%E8%BF%9E%E8%90%8C%E8%83%8C%E6%99%AF%E9%9F%B3%E4%B9%90.mp3'
    }, _this.computed = {
      countTime: function countTime() {
        return (this.countMin < 10 ? '0' + this.countMin : this.countMin) + ':' + (this.countSec < 10 ? '0' + this.countSec : this.countSec);
      },
      boxList: function boxList() {
        return this.items[this.curViewIndex];
      },
      rowNum: function rowNum() {
        return Math.sqrt(this.boxList.length);
      },
      spaceWidth: function spaceWidth() {
        return parseInt(this.screenWidth / this.rowNum * 0.05);
      },
      viewWidth: function viewWidth() {
        return (this.screenWidth - this.spaceWidth * 2 * this.rowNum) / this.rowNum;
      }
    }, _this.methods = {
      addTouchClass: function addTouchClass(i) {
        if (i) {
          this.touchIndex = i;
        }
        this.touchClass = 'touch-class';
      },
      removeTouchClass: function removeTouchClass() {
        this.touchClass = '';
      },
      start: function start() {
        this.isStart = true;
        this.isBoxShow = true;
        this._count();
        this.audioContext.play();
      },
      guess: function guess(i) {
        if (i) {
          if (this.curViewIndex < 4) {
            this.curViewIndex++;
            this.percent += 20;
          } else {
            this._stop();
          }
          this.grade++;
        } else {
          this._stop();
        }
      },
      reStart: function reStart() {
        var _this2 = this;

        this.isOverShow = false;
        setTimeout(function () {
          _this2.isOver = false;
          _this2.isBoxShow = true;
          _this2.$apply();
        }, 500);
        this._init();
        this._count();
      },
      shareApp: function shareApp(e) {
        this.onShareAppMessage({
          from: 'button',
          target: e.target
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this3 = this;

      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) _this3.userInfo = userInfo;
        _this3.$apply();
      });

      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.screenWidth = res.screenWidth;
          self.$apply();
        }
      });

      this.audioContext = _wepy2.default.createAudioContext('bgm');
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        _wepy2.default.showShareMenu({
          withShareTicket: true
        });
      }
      return {
        title: '找找不同小游戏',
        path: '/page/home',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }, {
    key: '_count',
    value: function _count() {
      var _this4 = this;

      clearInterval(this.timer);
      this.timer = setInterval(function () {
        _this4.countSec++;

        if (_this4.countSec >= 60) {
          _this4.countSec = 0;
          _this4.countMin++;
        }

        if (_this4.countMin >= 60) {
          _this4._stopCount();
        }
        _this4.$apply();
      }, 1000);
    }
  }, {
    key: '_stopCount',
    value: function _stopCount() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: '_init',
    value: function _init() {
      this.curViewIndex = 0;
      this.percent = 20;
      this.grade = 0;
      this.countMin = 0;
      this.countSec = 1;
      this.audioContext.play();
    }
  }, {
    key: '_stop',
    value: function _stop() {
      var _this5 = this;

      this.audioContext.pause();
      this.isBoxShow = false;
      setTimeout(function () {
        _this5.isOver = true;
        _this5.isOverShow = true;
        _this5.$apply();
      }, 500);
      this._stopCount();
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImlzU3RhcnQiLCJpc092ZXIiLCJjb3VudE1pbiIsImNvdW50U2VjIiwiY3VyVmlld0luZGV4IiwiZ3JhZGUiLCJ0aW1lciIsInNjcmVlbldpZHRoIiwicGVyY2VudCIsInRvdWNoQ2xhc3MiLCJ0b3VjaEluZGV4IiwiaXNCb3hTaG93IiwiaXNPdmVyU2hvdyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdWRpb0NvbnRleHQiLCJhdWRpb1VSTCIsImNvbXB1dGVkIiwiY291bnRUaW1lIiwiYm94TGlzdCIsIml0ZW1zIiwicm93TnVtIiwiTWF0aCIsInNxcnQiLCJsZW5ndGgiLCJzcGFjZVdpZHRoIiwicGFyc2VJbnQiLCJ2aWV3V2lkdGgiLCJtZXRob2RzIiwiYWRkVG91Y2hDbGFzcyIsImkiLCJyZW1vdmVUb3VjaENsYXNzIiwic3RhcnQiLCJfY291bnQiLCJwbGF5IiwiZ3Vlc3MiLCJfc3RvcCIsInJlU3RhcnQiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwiX2luaXQiLCJzaGFyZUFwcCIsImUiLCJvblNoYXJlQXBwTWVzc2FnZSIsImZyb20iLCJ0YXJnZXQiLCJldmVudHMiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJjcmVhdGVBdWRpb0NvbnRleHQiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwidGl0bGUiLCJwYXRoIiwiZmFpbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9zdG9wQ291bnQiLCJwYXVzZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxN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QWlCLEVBQXJCLEVBQXlCO0FBQ3ZCLGlCQUFLMkQsVUFBTDtBQUNEO0FBQ0QsZUFBS3RCLE1BQUw7QUFDRCxPQVpZLEVBWVYsSUFaVSxDQUFiO0FBYUQ7OztpQ0FDYTtBQUNab0Isb0JBQWMsS0FBS3JELEtBQW5CO0FBQ0EsV0FBS0EsS0FBTCxHQUFhLElBQWI7QUFDRDs7OzRCQUNPO0FBQ04sV0FBS0YsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtJLE9BQUwsR0FBZSxFQUFmO0FBQ0EsV0FBS0gsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLSCxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFdBQUtZLFlBQUwsQ0FBa0JtQixJQUFsQjtBQUNEOzs7NEJBQ087QUFBQTs7QUFDTixXQUFLbkIsWUFBTCxDQUFrQitDLEtBQWxCO0FBQ0EsV0FBS25ELFNBQUwsR0FBaUIsS0FBakI7QUFDQTJCLGlCQUFXLFlBQU07QUFDZixlQUFLckMsTUFBTCxHQUFjLElBQWQ7QUFDQSxlQUFLVyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsZUFBSzJCLE1BQUw7QUFDRCxPQUpELEVBSUcsR0FKSDtBQUtBLFdBQUtzQixVQUFMO0FBQ0Q7Ozs7RUF6SytCLGVBQUtFLEk7O2tCQUFsQnRFLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmib7mib7kuI3lkIwnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtcHJvZ3Jlc3MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcm9ncmVzcy9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG4gICAgZGF0YSA9IHtcbiAgICAgIGlzU3RhcnQ6IGZhbHNlLFxuICAgICAgaXNPdmVyOiBmYWxzZSxcbiAgICAgIGNvdW50TWluOiAwLFxuICAgICAgY291bnRTZWM6IDEsXG4gICAgICBjdXJWaWV3SW5kZXg6IDAsXG4gICAgICBncmFkZTogMCxcbiAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgc2NyZWVuV2lkdGg6IDAsXG4gICAgICBwZXJjZW50OiAyMCxcbiAgICAgIHRvdWNoQ2xhc3M6ICcnLFxuICAgICAgdG91Y2hJbmRleDogMCxcbiAgICAgIGlzQm94U2hvdzogZmFsc2UsXG4gICAgICBpc092ZXJTaG93OiBmYWxzZSxcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgICAgfSxcbiAgICAgIGF1ZGlvQ29udGV4dDogbnVsbCxcbiAgICAgIGF1ZGlvVVJMOiAnaHR0cDovLzd4bnZtbi5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS8lRTYlQjglQjglRTYlODglOEYlRTUlOEUlOUYlRTUlQTMlQjAtJUU1JUE0JUE5JUU1JUE0JUE5JUU4JUJGJTlFJUU4JTkwJThDJUU4JTgzJThDJUU2JTk5JUFGJUU5JTlGJUIzJUU0JUI5JTkwLm1wMydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGNvdW50VGltZSAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb3VudE1pbiA8IDEwID8gJzAnICsgdGhpcy5jb3VudE1pbiA6IHRoaXMuY291bnRNaW4pICsgJzonICsgKHRoaXMuY291bnRTZWMgPCAxMCA/ICcwJyArIHRoaXMuY291bnRTZWMgOiB0aGlzLmNvdW50U2VjKVxuICAgICAgfSxcbiAgICAgIGJveExpc3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLmN1clZpZXdJbmRleF1cbiAgICAgIH0sXG4gICAgICByb3dOdW0gKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuYm94TGlzdC5sZW5ndGgpXG4gICAgICB9LFxuICAgICAgc3BhY2VXaWR0aCAoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnNjcmVlbldpZHRoIC8gdGhpcy5yb3dOdW0gKiAwLjA1KVxuICAgICAgfSxcbiAgICAgIHZpZXdXaWR0aCAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zY3JlZW5XaWR0aCAtIHRoaXMuc3BhY2VXaWR0aCAqIDIgKiB0aGlzLnJvd051bSkgLyB0aGlzLnJvd051bVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhZGRUb3VjaENsYXNzKGkpIHtcbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICB0aGlzLnRvdWNoSW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaENsYXNzID0gJ3RvdWNoLWNsYXNzJ1xuICAgICAgfSxcbiAgICAgIHJlbW92ZVRvdWNoQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMudG91Y2hDbGFzcyA9ICcnXG4gICAgICB9LFxuICAgICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNCb3hTaG93ID0gdHJ1ZVxuICAgICAgICB0aGlzLl9jb3VudCgpXG4gICAgICAgIHRoaXMuYXVkaW9Db250ZXh0LnBsYXkoKVxuICAgICAgfSxcbiAgICAgIGd1ZXNzIChpKSB7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VyVmlld0luZGV4IDwgNCkge1xuICAgICAgICAgICAgdGhpcy5jdXJWaWV3SW5kZXgrK1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50ICs9IDIwXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3AoKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdyYWRlKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zdG9wKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlU3RhcnQgKCkge1xuICAgICAgICB0aGlzLmlzT3ZlclNob3cgPSBmYWxzZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5pc0JveFNob3cgPSB0cnVlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LCA1MDApXG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgICAgICB0aGlzLl9jb3VudCgpXG4gICAgICB9LFxuICAgICAgc2hhcmVBcHAoZSkge1xuICAgICAgICB0aGlzLm9uU2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICBmcm9tOiAnYnV0dG9uJyxcbiAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge31cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygodXNlckluZm8pID0+IHtcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB0aGlzLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcblxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBzZWxmLnNjcmVlbldpZHRoID0gcmVzLnNjcmVlbldpZHRoXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCdiZ20nKVxuICAgIH1cbiAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICAgIHdlcHkuc2hvd1NoYXJlTWVudSh7XG4gICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+aJvuaJvuS4jeWQjOWwj+a4uOaIjycsXG4gICAgICAgIHBhdGg6ICcvcGFnZS9ob21lJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9jb3VudCAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvdW50U2VjKytcblxuICAgICAgICBpZiAodGhpcy5jb3VudFNlYyA+PSA2MCkge1xuICAgICAgICAgIHRoaXMuY291bnRTZWMgPSAwXG4gICAgICAgICAgdGhpcy5jb3VudE1pbisrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb3VudE1pbiA+PSA2MCkge1xuICAgICAgICAgIHRoaXMuX3N0b3BDb3VudCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMTAwMClcbiAgICB9XG4gICAgX3N0b3BDb3VudCAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgICB0aGlzLnRpbWVyID0gbnVsbFxuICAgIH1cbiAgICBfaW5pdCgpIHtcbiAgICAgIHRoaXMuY3VyVmlld0luZGV4ID0gMFxuICAgICAgdGhpcy5wZXJjZW50ID0gMjBcbiAgICAgIHRoaXMuZ3JhZGUgPSAwXG4gICAgICB0aGlzLmNvdW50TWluID0gMFxuICAgICAgdGhpcy5jb3VudFNlYyA9IDFcbiAgICAgIHRoaXMuYXVkaW9Db250ZXh0LnBsYXkoKVxuICAgIH1cbiAgICBfc3RvcCgpIHtcbiAgICAgIHRoaXMuYXVkaW9Db250ZXh0LnBhdXNlKClcbiAgICAgIHRoaXMuaXNCb3hTaG93ID0gZmFsc2VcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWVcbiAgICAgICAgdGhpcy5pc092ZXJTaG93ID0gdHJ1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LCA1MDApXG4gICAgICB0aGlzLl9zdG9wQ291bnQoKVxuICAgIH1cbiAgfVxuIl19