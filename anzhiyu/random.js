var posts=["2024/05/11/我们的论坛/","2024/05/12/八泉学会关于匿名37的看法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };