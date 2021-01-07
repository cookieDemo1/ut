const workMode = [
  {
    path: '',
    redirect: 'p1'
  },
  {
    path: 'p1',
    component: () => import('../../views/workMode/port/index')
  }
]
export default workMode
