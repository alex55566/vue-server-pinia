<template>
<div class="buttons-wrapper">
    <div class="button-wrap">
        <button class="button">
            <svg class="logo-block" style="width: 29px; height: 28px;">
                <use xlink:href="../images/sprite.svg#pen"></use>
            </svg>

        </button>
        <span>Mistakes</span>
    </div>
    <div class="button-wrap">
        <button class="button">
            <svg class="logo-block" style="width: 28px; height: 28px;">
                <use xlink:href="../images/sprite.svg#chart"></use>
            </svg>
        </button>
        <span>Statistics</span>
    </div>
    <div class="button-wrap">
        <button class="button">
            <svg class="logo-block" style="width: 28px; height: 28px;">
                <use xlink:href="../images/sprite.svg#booktext"></use>
            </svg>
        </button>
        <span>Highway Code</span>
    </div>
    <div class="button-wrap">
        <button class="button">
            <svg class="logo-block" style="width: 29px; height: 28px;">
                <use xlink:href="../images/sprite.svg#bookmark"></use>
            </svg>
        </button>
        <span>Favorites</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'BottomButtons'
}
</script>

<style lang="scss" scoped>
@import 'Styles/_var.scss';

.buttons-wrapper {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    padding: 15px;

}

.button-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: 140%;
    color: $colorShark;
    span {
        text-align: center;
    }
}

svg {
    fill: $colorWhite;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58px;
    height: 58px;
    border-radius: 100%;
    background-color: $colorContrast;
    border: 1px solid transparent;
    cursor: pointer;
}
</style>
