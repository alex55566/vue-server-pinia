<template>
<button @click="checkQuestion" :class="[{'cheked': props.checked }, 'circle-question']">
    <span>{{ props.number }}</span>
    <div class="circle-check">
        <span></span>
        <span></span>
    </div>
</button>
</template>

<script>
export default {
    name: 'Question'
    
}
</script>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps({
    number: Number,
    checked: Boolean,
})

function checkQuestion() {
    store.commit('toogleQuestion', props.number)
}
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.circle-question {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 71px;
    height: 71px;
    background-color: rgba(18, 25, 43, 0.04);
    border-radius: 100%;
    border: 1px solid transparent;
    cursor: pointer;

    span {
        font-size: 18px;
        z-index: 1;
        color: $colorTextPrimary;
    }

    &.cheked {
        .circle-check {
            opacity: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        width: 71px;
        height: 71px;
        background-color: $colorWhite;
        clip-path: ellipse(44% 48% at 50% 50%);
        transform: rotate(45deg);
        left: -2px;
        top: -2px;
    }

    .circle-check {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        background-color: $colorGreen;
        border-radius: 100%;
        opacity: 0%;
        transition: opacity .5s ease-in-out; 
        span {

            &:first-child {
                position: absolute;
                left: 5px;
                top: 10px;
                width: 5px;
                height: 2px;
                background: white;
                -webkit-transform: rotate(43deg);
                transform: rotate(43deg);
            }
            &:last-child {
                position: absolute;
                left: 7px;
                top: 9px;
                width: 8px;
                height: 2px;
                background: white;
                -webkit-transform: rotate(-50deg);
                transform: rotate(-50deg);
            }
        }
    }
}
</style>
