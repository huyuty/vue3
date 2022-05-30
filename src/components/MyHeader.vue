<template class="all">
  <header class="buttons">
    <div class="p-3 mb-2 bg-warning text-dark">
    <button @click="$router.push('/')" type="button" class="btn btn-dark">Главная</button>
    <button @click="$router.push('/table')" type="button" class="btn btn-dark">Таблицы</button>
    <button @click="$router.push('/log')" type="button" class="btn btn-dark">Войти</button>
    </div>
  </header>


</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped>

</style>