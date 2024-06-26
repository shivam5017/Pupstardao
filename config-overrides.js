module.exports=function override(config){
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback,{
    stream: require.resolve("stream-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    zlib: require.resolve("browserify-zlib")
  })
  config.resolve.fallback = fallback;
  return config;
}