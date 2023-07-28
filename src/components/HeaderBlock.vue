<template>
<div class="header-wrapper">
    <div class="left-side">
        Ray Driving Theory
    </div>
    <div class="right-side">
        <div class="right-side__left">
            <a href="#" class="logo-link">
                <svg class="logo-block" style="width: 24px; height: 24px;">
                    <use xlink:href="../images/sprite.svg#crown"></use>
                </svg>
            </a>
        </div>
        <div class="right-side__right">
            <a href="#" class="logo-link">
                <svg class="logo-block" style="width: 24px; height: 24px;">
                    <use xlink:href="../images/sprite.svg#flame"></use>
                </svg>
                <div class="count">{{ count }}</div>
            </a>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'HeaderBlock'
}
</script>

<script setup>
import {
    ref
} from 'vue';

let count = ref(13)
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 65px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;

    .left-side {
        color: $colorShark;
        font-size: 18px;

    }

    .right-side {
        display: flex;
        align-items: center;
        gap: 8px;

        &__left {
            .logo-block {
                fill: $colorContrast
            }
        }

        &__right {
            .logo-block {
                fill: $colorTorchRed;
            }
        }

        .logo-link {
            display: flex;
            align-items: center;
            background-color: $colorWhite;
            padding: 7px 6px;
            border-radius: 8px;
        }
    }

    .count {
        font-size: 14px;
        color: $colorShark;
    }
}
</style>
