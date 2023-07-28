<template>
<RouterLink to="/questions" class="learning-wrapper">
    <div class="learning-wrapper__top">
        <div class="left-side">
            <div class="cap">
                <svg class="logo-block" style="width: 32px; height: 32px;">
                    <use xlink:href="../images/sprite.svg#cap"></use>
                </svg>
            </div>
            <div class="texts">
                <h3 class="texts-top">Learning</h3>
                <span class="texts-bottom">Category В</span>
            </div>
        </div>
        <div class="right-side">
            <div class="chevron">
                <svg class="logo-block" style="width: 20px; height: 20px;">
                    <use xlink:href="../images/sprite.svg#chevron"></use>
                </svg>
            </div>
        </div>
    </div>
    <div class="learning-wrapper__bottom">
        <div class="top-side">
            {{quantityChekedPosts}} questions out of {{ quantityPosts }} passed
        </div>
        <div class="bottom-side">
            <div v-for="(tick,index) in (quantityTick-1)" :key="index" :class="[{'progress-active': index + 1 <= progress}, 'progress-tick']"></div>
        </div>
    </div>

</RouterLink>
</template>

<script>
import {
    mapState, mapGetters
} from 'vuex';
export default {
    name: 'Learning',
    computed: {
            ...mapState({
                quantityPosts: state => state.posts.length,
                quantityTick: state => state.progressTick,
            }),
            ...mapGetters({
                quantityChekedPosts: 'checkedPosts',
                progress: 'progress',
            }),
        },
}
</script>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.learning-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 24px;
    border-radius: 20px;
    background-color: $colorWhite;
    margin-left: 15px;
    margin-right: 15px;

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    &__bottom {
        display: flex;
        flex-direction: column;
        gap: 8px;

    }

    .left-side {
        display: flex;
        align-items: center;
        gap: 15px;

        .cap {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 58px;
            height: 58px;
            background-color: $colorContrastSecond;
            border-radius: 100%;

            svg {
                fill: $colorContrast;
            }
        }

        .texts {
            display: flex;
            flex-direction: column;
            gap: 5px;

            &-top {
                font-size: 20px;
                font-weight: 600;
                line-height: 130%;
            }

            &-bottom {
                font-size: 14px;
                line-height: 140%;
                color: $colorGreyText;
            }

        }
    }

    .right-side {
        .chevron {
            svg {
                fill: $colorOsloGrey;
                transition: fill .5s ease-in-out;
            }
        }
    }

    .bottom-side {
        display: flex;
        gap: 5px;
    }

    .top-side {
        font-size: 14px;
        line-height: 140%;
        color: $colorTextPrimary;
    }

    .progress-tick {
        width: 37px;
        height: 6px;
        background-color: $colorGreen;
        border-radius: 5px;
        opacity: 10%;
        &.progress-active {
            opacity: unset;
        }
    }

    &:hover {
        .chevron {
            svg {
                fill: $colorContrast;
            }
        }
    }

}
</style>
