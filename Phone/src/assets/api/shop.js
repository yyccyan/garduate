/**
 * Mocking client-server processing
 */

const _products = [
  {
    id: 1,
    title: "iPhoneX",
    desc: '全面屏 全新设计 面部识别。',
    price: 7868.00,
    inventory: 2,
    isSelected: true,
    style: {
      '深空灰色': '../static/images/AppleX-1.jpg',
      '银色': '../static/images/AppleX-2.jpg',
    },
    activeStyleUrl: '../static/images/AppleX-1.jpg',
    storage: {
      '64GB': 7868,
      '256GB': 9068
    }
  },
  {
    id: 2,
    title: "vivo X20新年限量礼盒",
    desc: '4GB+64GB 全面屏双摄 移动联通电信4G手机 。',
    price: 2998.00,
    inventory: 2,
    isSelected: true,
    style: {
      '金色': '../static/images/vivo-2.jpg',
      '磨砂黑色': '../static/images/vivo-4.jpg',
      '星耀红色': '../static/images/vivo-1.jpg',
      '玫瑰金色': '../static/images/vivo-3.jpg'
    },
    activeStyleUrl: '../static/images/vivo-1.jpg',
    storage: {
      '4+64GB': 2998,
    }
  },
  {
    id: 3,
    title: "华为 mate10",
    desc: '送价值179原装皮套和219元碎屏保 麒麟970自带原装耳机/保护套。',
    price: 3899.00,
    inventory: 2,
    isSelected: true,
    style: {
      '樱粉金': '../static/images/mate10-1.jpg',
      '摩卡金': '../static/images/mate10-2.jpg',
      '香槟金': '../static/images/mate10-3.jpg',
      '亮黑色': '../static/images/mate10-4.jpg'
    },
    activeStyleUrl: '../static/images/mate10-1.jpg',
    storage: {
      '全网通4G+64G': 3899,
      '全网通6G+128G': 4499
    }
  },
  {
    id: 4,
    title: "OPPO R11s ",
    desc: '双卡双待全面屏拍照手机',
    price: 2999.00,
    inventory: 2,
    isSelected: true,
    style: {
      '香槟色': '../static/images/oppo-1.jpg',
      '黑色': '../static/images/oppo-2.jpg',
    },
    activeStyleUrl: '../static/images/oppo-1.jpg',
    storage: {
      '全网通4G+64G': 2999,
    }
  },
  {
    id: 5,
    title: "锤子（smartisan） 坚果pro2",
    desc: '全面屏手机 碳黑色（细红线版） 全网通 6G+128G',
    price: 1949.00,
    inventory: 2,
    isSelected: true,
    style: {
      '炭黑色': '../static/images/chuizi-1.jpg',
      '酒红色': '../static/images/chuizi2.jpg',
      '浅金色': '../static/images/chuizi-3.jpg',
    },
    activeStyleUrl: '../static/images/chuizi-1.jpg',
    storage: {
      '全网通32G': 1949,
      '全网通64GB': 2149,
      '全网通128GB': 2699
    }
  },
  {
    id: 6,
    title: "美图V6",
    desc: '自拍美颜手机。',
    price: 5999.00,
    inventory: 2,
    isSelected: true,
    style: {
      '鹿特丹橙': '../static/images/v6-1.jpg',
      '墨尔本绿': '../static/images/v6-2.jpg',
      '爱丁堡蓝': '../static/images/v6-3.jpg',
      '摩洛哥粉': '../static/images/v6-4.jpg'
    },
    activeStyleUrl: '../static/images/v6-1.jpg',
    storage: {
      '6GB+128G': 5999
    }
  },
  {
    id: 7,
    title: " 小米 MIX2",
    desc: '后置解锁 全面屏',
    price: 2999.00,
    inventory: 2,
    isSelected: true,
    style: {
      '黑色': '../static/images/m2.jpg',
    },
    activeStyleUrl: '../static/images/m2.jpg',
    storage: {
      '全网通6G+64G': 2999,
      '全网通6G+128G': 3329
    }
  },
  {
    id: 8,
    title: " 索尼（SONY） Xperia XZ1 ",
    desc: '3D扫描 HDR高清屏幕 ',
    price: 4699.00,
    inventory: 2,
    isSelected: true,
    style: {
      '月蓝': '../static/images/sony-1.jpg',
      '星粉': '../static/images/sony-2.jpg',
      '暖银': '../static/images/sony-3.jpg',
      '墨黑': '../static/images/sony-4.jpg',
    },
    activeStyleUrl: '../static/images/sony-1.jpg',
    storage: {
      '4G+64G': 4699,
    }
  },
  {
    id: 9,
    title: " 华为nova2S 手机 ",
    desc: '后置双摄像头 ',
    price: 2699.00,
    inventory: 2,
    isSelected: true,
    style: {
      '曜石黑': '../static/images/nova-1.jpg',
      '银钻灰': '../static/images/nova-2.jpg',
      '浅艾蓝': '../static/images/nova-3.jpg',
    },
    activeStyleUrl: '../static/images/nova-1.jpg',
    storage: {
      '4G+64G': 2699,
      '6G+64G': 2999,
    }
  },
  {
    id: 10,
    title: " 小米(MI) 红米5Plus ",
    desc: '全面屏 前置柔光自拍，4000mAh大电池 ',
    price: 999.00,
    inventory: 2,
    isSelected: true,
    style: {
      '金色': '../static/images/m5-1.jpg',
      '玫瑰金': '../static/images/m5-2.jpg',
      '浅蓝色': '../static/images/m5-3.jpg',
      '黑色': '../static/images/m5-4.jpg',
    },
    activeStyleUrl: '../static/images/m5-1.jpg',
    storage: {
      '3G+32G': 999,
      '4G+64G': 1348,
    }
  },
  {
    id: 11,
    title: " 全新诺基亚 6 第二代 ",
    desc: '多用途 可以开核桃 ',
    price: 999.00,
    inventory: 2,
    isSelected: true,
    style: {
      '黑色': '../static/images/Nokia.jpg',
    },
    activeStyleUrl: '../static/images/Nokia.jpg',
    storage: {
      '4G+32G': 1499,
      '4G+64G': 1699,
    }
  },
  {
    id: 12,
    title: " AGM M2 ",
    desc: ' 三防老人手机 双卡双待 ',
    price: 399.00,
    inventory: 2,
    isSelected: true,
    style: {
      '银红': '../static/images/agm-1.jpg',
      '黑金': '../static/images/agm-2.jpg',
    },
    activeStyleUrl: '../static/images/agm-1.jpg',
    storage: {
      '温暖牌': 399,
    }
  },
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}

