import {
  NET,
  PUSHING_DELIVERY_BTN_TYPE,
} from '../../src/common/js/const.js';

module.exports = {
  '/waimai/ajax/:channel/orderdetailv2': {
    response: {
      code: NET.SUCC_CODE,
      msg: '订单状态已更新，请刷新页面～, wm_orderid=8023840283042379',
      data: {
        shopInfo: {
          id: 123,
          mtId: 234,
          name: '耶里夏丽新疆餐厅',
          phone: '18601767914',
          shopLat: 31.208223954236348,
          shopLng: 121.41236901283264,
        },
        dinners: '8人',
        dishes: [{
          count: 1,
          dishId: 1,
          name: '热吃上海加',
          price: 29,
          originPrice: 31, // 优惠前价格
          activityIcon: '', // 活动菜品图片
        }, {
          count: 2,
          dishId: 1,
          name: '热吃上海加1',
          price: 9,
        }],
        boxFee: 3,
        delFee: 0,
        deliveryTimeDesc: '(立即送出)',
        activities: [{
          desc: '-￥4',
          id: 1234,
          price: 10,
          name: '要减10元',
          iconText: '减',
          iconUrl: 'http://placehold.it/150x150',
        }, {
          desc: '-￥5',
          id: 1235,
          price: 11,
          name: '要你开心减11元',
          iconText: '特',
          iconUrl: '',
        }],
        orderId: '1234567890',
        totalPrice: 150.445,
        discountPrice: 16.0002,
        payPrice: 258.999,
        receiver: {
          name: '张涛',
          phone: '12345678901',
          address: '长宁区安化路德必易园F101',
          addressLat: 31.21537982886249,
          addressLng: 121.42015814781189,
          gender: '先生',
        },
        mtOrderViewId: '1234',
        createTime: '2015-12-22 16:40',
        payType: '在线支付',
        invoiceTitle: '汉海信息技术有限公司',
        comment: '不要放辣椒',
        servicePhone: '400-820-5527',
        orderAccountType: 1, // 0: 点评, 1: 美团
        wxPay: '',
        qqPay: '',
        mtPayProduct: {
          tradeno: '',
          payToken: '',
        },

        // latestStatus: 13,
        // followPublicAccount: false,
        // publicAccountText: '跟踪配送信息，关注【美团外卖】服务号',
        // qrCodeUrl: 'http://p1.meituan.net/codeman/e8e9a096744813474097e5b84b5558e044365.png',
        // buttons: [],
        // rider: {
        //   type: '美团专送',
        //   phone: '15800223300',
        //   name: '王晓明',
        //   iconUrl: 'http://placehold.it/150x150',
        //   riderLat: 31.212773930872064,
        //   riderLng: 121.41550183296204,
        // },
        // deliveryTime: '约13:10送达',
      },
    },
  },
  '/waimai/ajax/:channel/orderStatus': {
    response: {
      code: NET.SUCC_CODE,
      msg: '订单状态已更新，请刷新页面～, wm_orderid=8023840283042379',
      data: {
        followPublicAccount: false,
        publicAccountText: '跟踪配送信息，关注【美团外卖】服务号',
        qrCodeUrl: 'http://p1.meituan.net/codeman/e8e9a096744813474097e5b84b5558e044365.png',
        statusMain: '订单待付款',
        statusSub: '请在{}内完成付款哦, 测试配送电话',
        operatorTip: '',
        expectedArrivalTip: '预计送达备选文案',
        deliveryTime: Date.now(),
        operatorTime: 10,
        operatorTimeType: 2,
        showToPay: 0, // 0表示已支付，取消订单title文案为：取消订单并退款；1表示未支付，取消订单的文案为：确定取消订单？；
        refundArea: {
          title: '退款进度标题',
          refundProgress: '退款进度描述文案',
          url: '',
        },
        customerServiceOrderDetail: {

        },
        userLat: 31.21537982886249,
        userLng: 121.42015814781189,
        buttons: [{
          name: '再来一单',
          isHighlight: 0,
          type: 1001,
        }, {
          name: '立即付款',
          isHighlight: 1,
          type: 2001,
        }, 
        {
          name: '取消订单',
          isHighlight: 0,
          type: 2002,
        },
        {
          name: '申请退款',
          isHighlight: 0,
          type: 2003,
        },
        {
          name: '催单',
          isHighlight: 0,
          type: 2004,
          remindMsg: '到达预计送达时间后才可以催单哦~',
        }, {
          name: '确认收货',
          isHighlight: 1,
          type: 2005,
        }, {
          name: '联系商家',
          isHighlight: 0,
          type: 2006,
        }, {
          name: '取消退款',
          isHighlight: 0,
          type: 2007,
        }, {
          name: '退款申诉',
          isHighlight: 0,
          type: 2009,
        }, {
          name: '评价',
          isHighlight: 0,
          type: 2010,
        }, {
          name: '逛逛别家',
          isHighlight: 0,
          type: 2012,
          clickUrl: 'https://takeaway.dianping.com/waimai/wxwallet',
        }, {
          name: '退款详情',
          isHighlight: 0,
          type: 2013,
          clickUrl: 'https://takeaway.dianping.com/waimai/qqwallet',
        },
        ],
        riderOperation: {
          iconUrl: 'http://placehold.it/150x150',
          name: '王晓明',
          deliveryType: 1,
          deliveryDesc: '众包',
          riderScore: 4,
          resourceList: [{
            action: 1, // 0：无动作，1：拨打电话，2：协议页跳转
            type: 7, // 7：骑手电话入口
            target: '18601767914',
          }],
        },
        payType: 2, // 1 货到付款 2 在线付款
      },
    },
  },
  '/waimai/ajax/:channel/order/cancel': {
    timeout: 0,
    // response: {
    //   code: 2,
    //   data: null,
    //   errordata: null,
    //   msg: null,
    //   reminds: [{
    //     btns: null,
    //     content: '订单状态已更新，请刷新页面～',
    //     isFirstShow: 0,
    //     title: null,
    //     type: 2,
    //   }],
    //   subcode: 0,
    // },
    // response: {
    //   "code": 2,
    //   "data": null,
    //   "errordata": null,
    //   "msg": null,
    //   "reminds": [{
    //     "btns": null,
    //     "content": "商家已出餐，无法取消订单，建议您申请退款",
    //     "isFirstShow": 0,
    //     "title": null,
    //     "type": 1
    //   }],
    //   "subcode": 0
    // }
    response: {
	"code": 2,
	"data": null,
	"errordata": null,
	"msg": null,
	"reminds": [{
		"btns": [{
			"isHighLight": 0,
			"message": "先等等",
			"type": 1
		}, {
			"isHighLight": 0,
			"message": "联系商家",
			"type": 2006
		}],
		"content": "商家已出餐，无法取消订单，建议您申请退款",
		"isFirstShow": 0,
		"title": '',
		"type": 2
	}],
	"subcode": 0
},
  },
  '/waimai/ajax/:channel/order/refundreason': {
    timeout: 3000,
    response: {
      code: NET.SUCC_CODE,
      msg: '服务器端异常',
      data: [{
        id: 1,
        reason: '不想要了',
      }, {
        id: 2,
        reason: '想退款了',
      }],
    },
  },
  '/waimai/ajax/:channel/order/refund': {
    timeout: 3000,
    response: {
      code: NET.SUCC_CODE,
    },
  },
  '/waimai/ajax/:channel/order/giveuprefund': {
    timeout: 3000,
    response: {
      code: NET.SUCC_CODE,
    },
  },
  '/waimai/ajax/:channel/orderStatusflow': {
    timeout: 3000,
    response: {
      code: 0,
      data: {
        buttons: [{
          title: '立即付款',
          isHighlight: 1,
          type: 1,
        }, {
          title: '取消订单',
          isHighlight: 0,
          type: 2,
        }, {
          title: '确认收货',
          isHighlight: 0,
          type: 3,
        }, {
          title: '申诉',
          isHighlight: 0,
          type: 4,
        }, {
          title: '催单',
          isHighlight: 0,
          type: 5,
        }, {
          title: '申请退款',
          isHighlight: 0,
          type: 6,
        }, {
          title: '放弃申请退款',
          isHighlight: 0,
          type: 7,
        }, {
          title: '再来一单',
          isHighlight: 0,
          type: 8,
        }],
        riderPhone: null,
        servicePhone: '400-820-5527',
        shopPhone: '18001248293',
        statusItems: [{
          iconCode: 4,
          statusContent: '',
          statusTime: '12:52',
          statusTitle: '订单已提交',
        }, {
          iconCode: 6,
          statusContent: '请耐心等待商家接单',
          statusTime: '12:52',
          statusTitle: '支付成功',
        }, {
          iconCode: 6,
          statusContent: '商品准备中，预计_time:14:17_送达',
          statusTime: '12:52',
          statusTitle: '商家已接单',
        }],
      },
      errordata: null,
      msg: null,
      reminds: null,
      subcode: 0,
    },
  },
  '/waimai/ajax/:channel/order/checkpaystatus': {
    timeout: 3000,
    response: {
      code: NET.SUCC_CODE,
    },
  },
  '/waimai/ajax/:channel/maxarrivedtime': {
    timeout: 1000,
    response: {
      code: NET.SUCC_CODE,
      data: [{
        date: '2016-01-02',
        timeList: [{
          defaultTime: 1,
          unixTime: '00:00',
          viewTime: '00:00',
        }, {
          defaultTime: 0,
          unixTime: '01:00',
          viewTime: '01:00',
        }, {
          defaultTime: 0,
          unixTime: '01:00',
          viewTime: '01:00',
        }, {
          defaultTime: 0,
          unixTime: '01:00',
          viewTime: '01:00',
        }, {
          defaultTime: 0,
          unixTime: '01:00',
          viewTime: '01:00',
        }],
      }, {
        date: '2016-01-03',
        timeList: [{
          defaultTime: 0,
          unixTime: '00:00',
          viewTime: '00:00',
        }, {
          defaultTime: 1,
          unixTime: '01:00',
          viewTime: '01:00',
        }],
      }],
    },
  },
  '/waimai/ajax/:channel/onekeyremind': {
    method: 'POST',
    response: {
      code: NET.SUCC_CODE,
      msg: '服务器出错了, 嘎嘎!',
      data: {
        type: NET.REMIND_TYPE_ALERT, // 1: toast, 2: 弹窗
        content: '要继续催单吗？',
        callNums: [{
          title: '骑手电话',
          phoneNumber: '18601767914',
        }],
        buttons: [{
          buttonContent: '关闭',
          buttonType: PUSHING_DELIVERY_BTN_TYPE.CLOSE,
        }, {
          buttonContent: '呼叫',
          buttonType: PUSHING_DELIVERY_BTN_TYPE.SHOW_PHONE_LIST,
        }, {
          buttonContent: '继续催单',
          buttonType: PUSHING_DELIVERY_BTN_TYPE.FORCE_PUSH_DELIVERY,
        }],
      },
    },
  },
};