

import { fetchPost, fetchGet ,fetchPostUrl} from './index';

export default {
  // 注册
  register(params) {
    return fetchPost('/offlineStore/index/register', params);
  },
  // 登录
  login(params) {
    return fetchPost('/offlineStore/index/login', params);
  },
  // 会员详情
  getUserDetail(params) {
    return fetchGet('/offlineStore/member/detail', params);
  },
  // 修改会员信息
  updateUserInfo(params) {
    return fetchPostUrl(`/offlineStore/member/detail/update`,params);
  },
  // 店铺列表
  getAllShop(params) {
    return fetchGet('/offlineStore/store/all', params);
  },
  // 店铺详情
  getShopDetail(shopId) {
    return fetchGet(`/offlineStore/store/detail/${shopId}`);
  },

  // 店铺活动列表
  getActivity(params) {
    return fetchGet('/offlineStore/store/activity/list', params);
  },

  // 店铺活动详情【活动ID】
  getActivityDetail(activityId) {
    return fetchGet(`/offlineStore/store/activity/detail/${activityId}`);
  },

  // 店铺所有banner【店铺ID】
  getBanner(shopId) {
    return fetchGet(`/offlineStore/store/banner/all/${shopId}`);
  },
  // 账本明细
  getLoglist(params) {
    return fetchGet(`/offlineStore/member/finance/log/list`, params);
  },
  // 账本明细详情
  getLogdetail(logid) {
    return fetchGet(`/offlineStore/member/finance/log/detail/${logid}`);
  },
  // 订单列表
  getOrderlist(params) {
    return fetchGet(`/offlineStore/member/order/list`, params);
  },
  // 订单详情
  getOrderdetail(orderid) {
    return fetchGet(`/offlineStore/member/order/detail/${orderid}`);
  },

  // 获取所有项目
  getAllProject(params) {
    return fetchGet(`/offlineStore/index/project/all`, params);
  },
  // 获取项目下产品列表
  getProjectList(params) {
    return fetchGet(`/offlineStore/index/project/product/list`, params);
  },
  // 获取此项目支持的模式
  getProjectPatternAll(projectid) {
    return fetchGet(`/offlineStore/index/project/pattern/all/a-t-id/${projectid}`);
  },
  getSkuAllSpu(productid, modeid) {
    return fetchGet(`/offlineStore/index/project/sku/all/spu-id/${productid}/${modeid}`);
  },
  // 串串规则
  rule(params) {
    return fetchPostUrl('/offlineStore/member/order/show/rule', params);
  },
  // 计算价格和金额
  price(params) {
    return fetchPostUrl('/offlineStore/member/order/show/price', params);
  },
  // 创建订单
  createOrder(params) {
    return fetchPostUrl('/offlineStore/member/order/create', params);
  },

// 用户账本金额 
  getFinanceDetail(params) {
    return fetchGet(`/offlineStore/member/finance/detail`, params);
  },
  // 取消订单
  cancelOrder(params) {
    return fetchPostUrl('/offlineStore/member/order/cancel', params);
  },
// 获取创建订单时的入参
  getCreateOrderParams(params) {
    return fetchGet('/offlineStore/member/order/create/param', params);
  },
  // 清账申请
  settleUpApply(params) {
    return fetchPostUrl('/offlineStore/member/finance/settle-up/apply', params);
  },


};
