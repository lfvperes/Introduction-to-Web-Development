<template>
  <div id="app">
    <Items v-bind:items="items"/>
  </div>
</template>

<script>
import Items from './components/Items';

export default {
  name: 'App',
  components: {
    Items
  },
  data(){
    return{
      todos: [
        {
          id: 1,
          title: 'first item',
          odd: true
        },
        {
          id: 2,
          title: 'second item',
          odd: false
        },
        {
          id: 3,
          title: 'third item',
          odd: true
        }
      ]
    }
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
