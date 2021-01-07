const systemHome = [
  {
    path: '',
    redirect: 'systemInfo'
  },
  {
    path: 'systemInfo',
    component: () => import('../../views/systemHome/systemInfo/index')
  }
]
export default systemHome
