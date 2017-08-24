/**
 * 个人中心
 */
import UserCenter from '@/components/usercenter'
import Setting from '@/components/usercenter/setting'
import SettingDefault from '@/components/usercenter/setting/default'
import AddrList from '@/components/usercenter/setting/address'
import AddAddr from '@/components/usercenter/setting/address/add'
export default [{
    path: '/usercenter',
    component: UserCenter,
  },
  {
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
    }]
  }
]
