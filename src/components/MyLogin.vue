<template>
  <form class="all">

    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Электронная почта</label>
    </div>


    <div class="form-outline- mb-4">
      <input type="password" id="form2Example2" class="form-control" />
      <label class="form-label" for="form2Example2">Пароль</label>
    </div>


    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        >
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Запомнить меня </label>
        </div>
      </div>

      <div class="col">
        <a href="#!">Забыли пароль?</a>
      </div>
    </div>


    <button type="button" class="btn btn-dark btn-block mb-4">Войти</button>


    <div class="text-center">
      <p><a href="#!">Регистрация</a></p>
    </div>
  </form>
</template>

<script>
export default {
  name: "MyLogin"
}
</script>

<style scoped>
 .all{
   position: absolute;
   margin: 20px 0px 0px 810px;
 }
</style>