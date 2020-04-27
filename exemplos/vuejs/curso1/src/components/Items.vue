<template>
    <div>
        <div v-for="item in items">
            <h3>{{item.title}}</h3>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Items',
    props: ['items']
}
</script>

<style scoped>
    
</style>