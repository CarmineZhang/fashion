/**
 * 个人中心
 */
import Setting from '@/components/usercenter/setting'
import SettingDefault from '@/components/usercenter/setting/default'
import AddrList from '@/components/usercenter/setting/address'
import AddAddr from '@/components/usercenter/setting/address/add'
import Invoice from '@/components/usercenter/setting/invoice'
export default {
  path: '/setting',
  component: Setting,
  children: [{
    path: '',
    component: SettingDefault
  }, {
    path: 'addrlist',
    name: 'setting-addrlist',
    component: AddrList
  }, {
    path: 'addaddress',
    name: 'setting-add-address',
    component: AddAddr
  }, {
    path: 'invoicelist',
    name: 'setting-invoicelist',
    component: Invoice
  }]
}
