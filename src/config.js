
let config = {
  development: {
    debug: 1,
    apiUrl: 'http://212.109.216.232:4040', //without trailing slash
    captcha: {
      secret: '6LdpD_gUAAAAAOvcFYzJki1dz8ZOpQQ5uVxS7BxL'
    },
    stage: 'dev'
  },
  production:  {
    debug: 0,
    apiUrl: 'http://212.109.216.232:4040',
    captcha: {
      secret: '6LdpD_gUAAAAAOvcFYzJki1dz8ZOpQQ5uVxS7BxL'
    },
    stage: 'prod'
  }
}


export  { config }
