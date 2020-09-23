<template>
  <div class="home pd-top">
    <banner
      :data="banner"
      collectionName="banner"
    />
    <div class="list">
      <uc-cell
        v-for="(item,index) of list"
        :key="item._id"
       :data="item" 
       :index="index" 
       collectionName="home"
       />
    </div>
    
  </div>
</template>

<script>
  import banner from '../components/banner/banner.vue'
  import UcCell from '../components/cell/uc-cell.vue'
  // import axios from '../plugins/axios.js'
  // import axios from 'axios'？？？
  export default {
    name:'home',
    props:{},
    data(){
      return {
        banner:[
          // {_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
          // {_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
          // {_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
          // {_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
        ],
        list:[
          // {_id:1,title:'xxx1',des:'oo'},
          // {_id:2,title:'xxx2',des:'oo'},
          // {_id:3,title:'xxx3',des:'oo'},
        ]
      }
    },
    components:{banner,UcCell},
    mounted(){
		this.$axios({
			url:'/api/home',
			params:{_limit:20,_page:1},
			// headers:{token:'123456789'}
		}).then(
		// res=>console.log('res',res)
		res=>this.list=res.data.data
		)
		this.$axios({
			url:'/api/banner',
			params:{_limit:3,_page:1}
			// headers:{token:'123456789'}
		}).then(
		// res=>console.log('res',res)
		res=>this.banner=res.data.data
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style>
  .home{}
  .list{
    padding: 0 0.34rem;
  }
</style>
