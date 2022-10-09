<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'projects' }">Projects</router-link> |
    <router-link :to="{ name: 'booklist' }">Booklist</router-link>
  </nav>
  <router-view />
</template>
