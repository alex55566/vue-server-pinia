<template>
    <div class="header-question__wrap">
        <RouterLink to="/" class="header-question__btn">
            <svg class="logo-block" style="width: 24px; height: 24px;">
                    <use xlink:href="../images/sprite.svg#arrow"></use>
                </svg>
            Learning
        </RouterLink>
        <div class="header-question__text">
            Tests
        </div>

    </div>
</template>

<script>
    export default {
        name: 'HeaderQuestion'
    }
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.header-question {
    &__wrap {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0px 15px;
    }
    &__btn {
        display: flex;
        gap: 15px;
        font-size: 18px;
        line-height: 140%;
        color: $colorTextPrimary;
    }
    &__text {
        align-self: center;
        padding: 14px 36px;
        font-size: 14px;
        line-height: 140%;
        color: $colorContrast;
        border-bottom: 1px solid $colorContrast;
    }
}

</style>