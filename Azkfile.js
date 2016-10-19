systems({
 'mongodb': {
    image : { docker: 'azukiapp/mongodb' },
    scalable: false,
    mounts: {
      '/data/db': persistent('mongodb-#{manifest.dir}'),
    },
    ports: {
      http: '28017:28017/tcp',
    },
    http: {
      domains: [ '#{system.name}.#{azk.default_domain}' ],
    },
    export_envs: {
      MONGODB_URI: 'mongodb://#{net.host}:#{net.port[27017]}/devops-test',
    },
  },
  'devops-challengesh': {
    depends: ['mongodb'],
    image: {"docker": "azukiapp/node"},
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: ["npm", "run", "dev"],
    mounts: {
      '/azk/#{manifest.dir}': sync("."),
      '/azk/#{manifest.dir}/node_modules': persistent("./node_modules"),
    },
    scalable: {"default": 1},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "3000:3000/tcp",
    },
    envs: {
      NODE_ENV: "dev",
      PORT: "3000",
    },
  },
});
