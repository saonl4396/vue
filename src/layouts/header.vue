<template>
  <div class="nav">
    <ul>
		<!-- 声明式跳转 -->
		<router-link to="/home" tag="li" active-class="active"><a href="JavaScript:;" >首页</a></router-link>
			<router-link  to="/follow"  tag="li" active-class="active"><a href="JavaScript:;" >关注</a></router-link>
				<router-link  to="/column"  tag="li" active-class="active"><a href="JavaScript:;" >栏目</a></router-link>
     
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Header',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
.nav ul{width:4.38rem;height:0.6rem; margin:0 auto;}
.nav ul li{width:1.46rem;height:0.6rem; float:left;}
.nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
.nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #5477b2; color:#5477b2;}
</style>
