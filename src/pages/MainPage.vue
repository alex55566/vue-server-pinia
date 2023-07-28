<template>
    <Learning />
    <MiddleButtons />
    <BottomButtons />
</template>

<script>
import Learning from 'Components/Learning.vue';
import MiddleButtons from 'Components/MiddleButtons.vue';
import BottomButtons from 'Components/BottomButtons.vue';

export default {
    name: 'MainPage', 
    components: {
        Learning,
        MiddleButtons,
        BottomButtons,
    },
}
</script>

<script setup>

import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore()

const chekedPosts = computed(() => store.state.posts.filter(el => el.checked === true))
const checkStorage = ref(sessionStorage.getItem('questions') ? JSON.parse(sessionStorage.getItem('questions')).filter(el => el.checked === true) : [])

onMounted(function ()  {
    if (chekedPosts.value.length === 0 && checkStorage.value.length === 0) {
        store.dispatch('getData')
    }
    else {
        store.commit('getStore')
    }
})


</script>

<style lang="scss" scoped>

</style>
