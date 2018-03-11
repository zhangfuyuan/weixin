'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testMixin = function (_wepy$mixin) {
  _inherits(testMixin, _wepy$mixin);

  function testMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, testMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = testMixin.__proto__ || Object.getPrototypeOf(testMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      mixin: 'This is mixin data.',
      items: [[{
        isTrue: false,
        txt: '通'
      }, {
        isTrue: true,
        txt: '同'
      }, {
        isTrue: false,
        txt: '桶'
      }, {
        isTrue: false,
        txt: '痛'
      }], [{
        isTrue: false,
        bgUrl: '../res/zhaowei.png'
      }, {
        isTrue: false,
        bgUrl: '../res/zhangmin.png'
      }, {
        isTrue: false,
        bgUrl: '../res/zhuyin.png'
      }, {
        isTrue: false,
        bgUrl: '../res/meiyanfang.png'
      }, {
        isTrue: true,
        bgUrl: '../res/zhangziyi.png'
      }, {
        isTrue: false,
        bgUrl: '../res/zhangmanyu.png'
      }, {
        isTrue: false,
        bgUrl: '../res/huangshengyi.png'
      }, {
        isTrue: false,
        bgUrl: '../res/linqingxia.png'
      }, {
        isTrue: false,
        bgUrl: '../res/zhangbozhi.png'
      }], [{
        isTrue: false,
        txt: '4*9'
      }, {
        isTrue: false,
        txt: '27+9'
      }, {
        isTrue: false,
        txt: '45-9'
      }, {
        isTrue: false,
        txt: '6*6'
      }, {
        isTrue: false,
        txt: '72/2'
      }, {
        isTrue: false,
        txt: '34+2'
      }, {
        isTrue: false,
        txt: '24*1.5'
      }, {
        isTrue: false,
        txt: '2*18'
      }, {
        isTrue: false,
        txt: '12*3'
      }, {
        isTrue: true,
        txt: '39-1'
      }, {
        isTrue: false,
        txt: '19+17'
      }, {
        isTrue: false,
        txt: '9*4'
      }, {
        isTrue: false,
        txt: '1+35'
      }, {
        isTrue: false,
        txt: '46-10'
      }, {
        isTrue: false,
        txt: '36'
      }, {
        isTrue: false,
        txt: '60*0.6'
      }, {
        isTrue: false,
        txt: '36-0'
      }, {
        isTrue: false,
        txt: '10*3.6'
      }, {
        isTrue: false,
        txt: '30+6'
      }, {
        isTrue: false,
        txt: '33+3'
      }], [{
        isTrue: false,
        bgUrl: '../res/clock1_1.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock1_2.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock1_3.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock1_4.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock1_5.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock2_1.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock2_2.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock2_3.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock2_4.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock2_5.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock3_1.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock3_2.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock3_3.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock3_4.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock3_5.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock4_1.png'
      }, {
        isTrue: true,
        bgUrl: '../res/clock4_2.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock4_3.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock4_4.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock4_5.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock5_1.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock5_2.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock5_3.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock5_4.png'
      }, {
        isTrue: false,
        bgUrl: '../res/clock5_5.png'
      }], [{
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: true,
        opacity: 0.8
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }, {
        isTrue: false,
        opacity: 1
      }]]
    }, _this.methods = {
      tap: function tap() {
        this.mixin = 'mixin data was changed';
        console.log('mixin method tap');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(testMixin, [{
    key: 'onShow',
    value: function onShow() {
      // console.log('mixin onShow')
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // console.log('mixin onLoad')
    }
  }]);

  return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsidGVzdE1peGluIiwiZGF0YSIsIm1peGluIiwiaXRlbXMiLCJpc1RydWUiLCJ0eHQiLCJiZ1VybCIsIm9wYWNpdHkiLCJtZXRob2RzIiwidGFwIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsYUFBTyxxQkFERjtBQUVMQyxhQUFPLENBQ0wsQ0FDRTtBQUNFQyxnQkFBUSxLQURWO0FBRUVDLGFBQUs7QUFGUCxPQURGLEVBSUs7QUFDREQsZ0JBQVEsSUFEUDtBQUVEQyxhQUFLO0FBRkosT0FKTCxFQU9LO0FBQ0RELGdCQUFRLEtBRFA7QUFFREMsYUFBSztBQUZKLE9BUEwsRUFVSztBQUNERCxnQkFBUSxLQURQO0FBRURDLGFBQUs7QUFGSixPQVZMLENBREssRUFlRixDQUNEO0FBQ0VELGdCQUFRLEtBRFY7QUFFRUUsZUFBTztBQUZULE9BREMsRUFJRTtBQUNERixnQkFBUSxLQURQO0FBRURFLGVBQU87QUFGTixPQUpGLEVBT0U7QUFDREYsZ0JBQVEsS0FEUDtBQUVERSxlQUFPO0FBRk4sT0FQRixFQVVFO0FBQ0RGLGdCQUFRLEtBRFA7QUFFREUsZUFBTztBQUZOLE9BVkYsRUFhRTtBQUNERixnQkFBUSxJQURQO0FBRURFLGVBQU87QUFGTixPQWJGLEVBZ0JFO0FBQ0RGLGdCQUFRLEtBRFA7QUFFREUsZUFBTztBQUZOLE9BaEJGLEVBbUJFO0FBQ0RGLGdCQUFRLEtBRFA7QUFFREUsZUFBTztBQUZOLE9BbkJGLEVBc0JFO0FBQ0RGLGdCQUFRLEtBRFA7QUFFREUsZUFBTztBQUZOLE9BdEJGLEVBeUJFO0FBQ0RGLGdCQUFRLEtBRFA7QUFFREUsZUFBTztBQUZOLE9BekJGLENBZkUsRUE0Q0YsQ0FDRDtBQUNFRixnQkFBUSxLQURWO0FBRUVDLGFBQUs7QUFGUCxPQURDLEVBSUU7QUFDREQsZ0JBQVEs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QUFTO0FBRlIsT0ExR0YsQ0F2TEU7QUFGRixLLFFBMFNQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRDtBQUNMLGFBQUtQLEtBQUwsR0FBYSx3QkFBYjtBQUNBUSxnQkFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0Q7QUFKTyxLOzs7Ozs2QkFPRDtBQUNQO0FBQ0Q7Ozs2QkFFUTtBQUNQO0FBQ0Q7Ozs7RUF4VG9DLGVBQUtULEs7O2tCQUF2QkYsUyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdE1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIGRhdGEgPSB7XG4gICAgbWl4aW46ICdUaGlzIGlzIG1peGluIGRhdGEuJyxcbiAgICBpdGVtczogW1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICB0eHQ6ICfpgJonXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IHRydWUsXG4gICAgICAgICAgdHh0OiAn5ZCMJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICB0eHQ6ICfmobYnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIHR4dDogJ+eXmydcbiAgICAgICAgfVxuICAgICAgXSwgW1xuICAgICAgICB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy96aGFvd2VpLnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvemhhbmdtaW4ucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy96aHV5aW4ucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9tZWl5YW5mYW5nLnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogdHJ1ZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy96aGFuZ3ppeWkucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy96aGFuZ21hbnl1LnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvaHVhbmdzaGVuZ3lpLnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvbGlucWluZ3hpYS5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL3poYW5nYm96aGkucG5nJ1xuICAgICAgICB9XG4gICAgICBdLCBbXG4gICAgICAgIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIHR4dDogJzQqOSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgdHh0OiAnMjcrOSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgdHh0OiAnNDUtOSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgdHh0OiAnNio2J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICB0eHQ6ICc3Mi8yJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICB0eHQ6ICczNCsyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICB0eHQ6ICcyNCoxLjUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIHR4dDogJzIqMTgnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIHR4dDogJzEyKjMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IHRydWUsXG4gICAgICAgICAgdHh0OiAnMzktMSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgdHh0OiAnMTkrMTcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIHR4dDogJzkqNCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgdHh0OiAnMSszNSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgdHh0OiAnNDYtMTAnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIHR4dDogJzM2J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICB0eHQ6ICc2MCowLjYnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIHR4dDogJzM2LTAnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIHR4dDogJzEwKjMuNidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgdHh0OiAnMzArNidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgdHh0OiAnMzMrMydcbiAgICAgICAgfVxuICAgICAgXSwgW1xuICAgICAgICB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazFfMS5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL2Nsb2NrMV8yLnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvY2xvY2sxXzMucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazFfNC5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL2Nsb2NrMV81LnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvY2xvY2syXzEucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazJfMi5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL2Nsb2NrMl8zLnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvY2xvY2syXzQucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazJfNS5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL2Nsb2NrM18xLnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvY2xvY2szXzIucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazNfMy5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL2Nsb2NrM180LnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvY2xvY2szXzUucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazRfMS5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IHRydWUsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvY2xvY2s0XzIucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazRfMy5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL2Nsb2NrNF80LnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvY2xvY2s0XzUucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazVfMS5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL2Nsb2NrNV8yLnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgYmdVcmw6ICcuLi9yZXMvY2xvY2s1XzMucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBiZ1VybDogJy4uL3Jlcy9jbG9jazVfNC5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIGJnVXJsOiAnLi4vcmVzL2Nsb2NrNV81LnBuZydcbiAgICAgICAgfVxuICAgICAgXSwgW1xuICAgICAgICB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiB0cnVlLFxuICAgICAgICAgIG9wYWNpdHk6IDAuOFxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlzVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgaXNUcnVlOiBmYWxzZSxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpc1RydWU6IGZhbHNlLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgXVxuICAgIF1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRhcCAoKSB7XG4gICAgICB0aGlzLm1peGluID0gJ21peGluIGRhdGEgd2FzIGNoYW5nZWQnXG4gICAgICBjb25zb2xlLmxvZygnbWl4aW4gbWV0aG9kIHRhcCcpXG4gICAgfVxuICB9XG5cbiAgb25TaG93KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdtaXhpbiBvblNob3cnKVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdtaXhpbiBvbkxvYWQnKVxuICB9XG59XG4iXX0=