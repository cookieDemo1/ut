import request from '../../utils/http'

// /cgi-bin/sysinfo?cmd=get
export function getSystemInfo () {
  return request({
    url: 'cgi-bin/sysinfo',
    method: 'GET',
    params: {
      cmd: 'get'
    }
  })
}
