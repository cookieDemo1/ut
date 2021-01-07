const statusSearch = [
  {
    path: '',
    redirect: 'comParams'
  },
  {
    path: 'comParams',
    component: () => import('../../views/statusSearch/comParams/index')
  },
  {
    path: 'networkLink',
    component: () => import('../../views/statusSearch/networkLink/index')
  },
  {
    path: 'serialCom',
    component: () => import('../../views/statusSearch/serialCom/index')
  }
]

export default statusSearch
