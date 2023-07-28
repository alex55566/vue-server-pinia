<template>
<div class="buttons-wrapper">
    <button class="button-wrap">
        <div class="button-inner">
            <svg class="logo-block" style="width: 24px; height: 24px;">
                <use xlink:href="../images/sprite.svg#exam"></use>
            </svg>
        </div>
        <span>DVSA Exam</span>
    </button>
    <button class="button-wrap">
        <button class="button-inner">
            <svg class="logo-block" style="width: 24px; height: 24px;">
                <use xlink:href="../images/sprite.svg#rocket"></use>
            </svg>
        </button>
        <span>Express mode</span>
    </button>
    <button class="button-wrap">
        <button class="button-inner">
            <svg class="logo-block" style="width: 24px; height: 24px;">
                <use xlink:href="../images/sprite.svg#play"></use>
            </svg>
        </button>
        <span>Hazard perception</span>
    </button>
    <button class="button-wrap">
        <button class="button-inner">
            <svg class="logo-block" style="width: 24px; height: 24px;">
                <use xlink:href="../images/sprite.svg#road"></use>
            </svg>
        </button>
        <span>Road signs</span>
    </button>
    <button class="button-wrap">
        <button class="button-inner">
            <svg class="logo-block" style="width: 24px; height: 24px;">
                <use xlink:href="../images/sprite.svg#game"></use>
            </svg>
        </button>
        <span>Multiplayer Learning</span>
    </button>
</div>
</template>

    
<script>
export default {
    name: 'MiddleButtons'
}
</script>

    
<style lang="scss" scoped>
@import 'Styles/_var.scss';

.buttons-wrapper {
    display: grid;
    justify-content: center;
    gap: 8px;
    grid-template-columns: repeat(2, 50%);
    padding-left: 15px;
    padding-right: 15px;


}

.button-wrap {
    display: flex;
    padding: 16px 12px;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    border-radius: 20px;
    background-color: $colorWhite;
    border: 1px solid transparent;
    cursor: pointer;

    span {
        max-width: 86px;
        color: $colorTextMiddle;
        text-align: left;
    }

    &:hover {
        .button-inner {
            background-color: $colorContrastSecond;
        }

        svg {
            fill: $colorTorchRed;
        }

    }
    &:last-child {
        grid-column: 2 span;
        span {
            max-width: unset;
        }
    }
}

svg {
    fill: $colorPurpleHeart;
    z-index: 5;
    transition: fill .5s ease-in-out;

}

.button-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: $colorPurple;
    border: 1px solid transparent;
    cursor: pointer;
    transition: background-color .5s ease-in-out;

}
</style>
