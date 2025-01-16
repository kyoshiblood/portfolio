<script setup>
</script>

<template>
    <router-view></router-view>
</template>

<style scoped>
* {
   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


button {
  font-weight: bold;
}

header {
    display: flex;  
    justify-content: center;
    align-items: center;

    padding-bottom: 2rem;

    border: 1px solid gray;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}

.avatar {
    width: 256px;
    height: 256px;

    border-radius: 25px;
}

.presentation {
    display: flex;  
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
}

.presentation h2 {
    padding: 0;
}

#social {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    list-style: none;
}

#social div {
  display: flex;
  gap: 10px;
  font-size: 2.4rem;
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

a {
    text-decoration: none;
    color: #000000;
}

button {
    background: transparent;
    border: 0;

    font-size: 24px;

    cursor: pointer;
}
</style>
