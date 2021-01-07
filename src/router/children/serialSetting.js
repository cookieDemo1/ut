const serialSetting = [
  {
    path: '',
    redirect: 'p1'
  },
  {
    path: 'p1',
    component: () => import('../../views/serialSetting/port/index')
  }
]

export default serialSetting
