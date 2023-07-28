<template>
    <div class="wrapper-page">
        <HeaderQuestion/>
        <div class="wrapper-info" v-if="isError && !isLoad">Something went wrong....try again</div>
        <div class="wrapper-info" v-if="isLoad && !isError">Loading...</div>
        <div v-if="!isError && !isLoad" class="wrapper-question" >
            <Question v-for="question in questions" :key="question.id" :number="question.id" :checked="question.checked"/>
        </div>
    </div>
</template>

<script>
import HeaderQuestion from 'Components/HeaderQuestion.vue';
import Question from 'Components/Question.vue';
import {
    mapState
} from 'vuex';
    export default {
        name: 'QuestionsPage',
        components: {
            HeaderQuestion,
            Question
        },

        computed: {
        ...mapState({
            questions: state => state.posts,
            isLoad: state => state.loading,
            isError: state => state.error,
        }),
    }
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

.wrapper-page {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.wrapper-question {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-content: center;
    justify-items: center; 
    gap: 10px;
}

.wrapper-info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-align: center;
}

</style>