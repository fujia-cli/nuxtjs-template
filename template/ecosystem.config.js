module.exports = {
  apps: [
    {
      name: '<%= packageName %>',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances, you can specify
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
