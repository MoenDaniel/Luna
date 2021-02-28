<template>
    <div id="menu">
        <h1>Menu</h1>
        <MenuList />
        <br>
        <h1>Drinks</h1>
        <DrinkList />
    </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import DrinkList from '@/components/DrinkList'

export default {
    name: "FullMenu",
    components: {
        MenuList,
        DrinkList
    }
}
</script>

<style scoped>
#menu {
    text-align: center;
}
</style>>