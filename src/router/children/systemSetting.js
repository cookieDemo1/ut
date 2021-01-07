const systemSetting = [
  {
    path: '',
    redirect: 'ipAddr'
  },
  {
    path: 'ipAddr',
    component: () => import('../../views/systemSetting/ipAddr/index')
  },
  {
    path: 'addrFilter',
    component: () => import('../../views/systemSetting/addrFilter/index')
  },
  {
    path: 'userManage',
    component: () => import('../../views/systemSetting/userManage/index')
  },
  {
    path: 'snmp',
    component: () => import('../../views/systemSetting/snmp/index')
  },
  {
    path: 'mqtt',
    component: () => import('../../views/systemSetting/mqtt/index')
  }
]

export default systemSetting
