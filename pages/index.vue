<template>
  <div>
    <h4>02/08/1998</h4>
    <h1>{{ message }}</h1>
    <h2>Enter your Name: <input type="text" v-model=name></h2>
    <button @click="changeName">Click to change name</button>
      <h1 v-if="buttonClicked">{{ inputName }}</h1>
    Enter City:<input type="text" v-model=city><button @click="callApi">Get Weather</button><br>
    {{weatherInfo}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  data() {
    return {
      message: 'Testing Azure+Github Deployment',
      name:"",
      city:"",
      inputName:"",
      buttonClicked:true,
      weatherInfo:null
    }
  },
  methods: {
    changeName() {
      this.inputName = `Hello ${this.name}`
     //this.buttonClicked = !this.buttonClicked
    },
    callApi(){
      console.log('Calling API')
      console.log(this.city)
      axios({
        url:'/api/test',
        method:'get',
        params:{
          city:this.city
        }
      }).then(response=>{
        console.log(response.data)
        this.weatherInfo = response.data
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>
