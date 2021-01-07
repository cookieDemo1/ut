const deviceManage = [
  {
    path: '',
    redirect: 'firmwareUpdate'
  },
  {
    path: 'firmwareUpdate',
    component: () => import('../../views/deviceManage/firmwareUpdate/index')
  },
  {
    path: 'recovery',
    component: () => import('../../views/deviceManage/recovery/index')
  },
  {
    path: 'portReboot',
    component: () => import('../../views/deviceManage/portReboot/index')
  },
  {
    path: 'systemReboot',
    component: () => import('../../views/deviceManage/systemReboot/index')
  }
]

export default deviceManage
