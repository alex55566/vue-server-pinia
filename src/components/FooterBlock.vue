<template>
<div class="buttons-wrapper">
    <div class="button-wrap">
        <button class="button">
            <svg class="logo-block" style="width: 24px; height: 24px;">
                <use xlink:href="../images/sprite.svg#home"></use>
            </svg>

        </button>
        <span>Home</span>
    </div>
    <div class="button-wrap">
        <button class="button">
            <svg class="logo-block" style="width: 28px; height: 28px;">
                <use xlink:href="../images/sprite.svg#route"></use>
            </svg>
        </button>
        <span>Your plan</span>
    </div>
    <div class="button-wrap">
        <button class="button">
            <svg class="logo-block" style="width: 28px; height: 28px;">
                <use xlink:href="../images/sprite.svg#ranking"></use>
            </svg>
        </button>
        <span>Leaderboard</span>
    </div>
    <div class="button-wrap">
        <button class="button">
            <svg class="logo-block" style="width: 29px; height: 28px;">
                <use xlink:href="../images/sprite.svg#profile"></use>
            </svg>
        </button>
        <span>Profile</span>
    </div>
</div>
</template>

    
<script>
export default {
    name: 'FooterBlock'
}
</script>

    
<style lang="scss" scoped>
@import 'Styles/_var.scss';

.buttons-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 16px 0px;
    background: $colorWhite;
    border-radius: 24px 24px 0px 0px;

}

.button-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 500;
    line-height: 120%;

    span {
        text-align: center;
        color: $colorShark;

        transition: color .5s ease-in-out;
    }

    &:hover {
        .button {
            background-color: $colorPippinOpac;
        }

        span {
            color: $colorContrast
        }

        svg {
            fill: $colorContrast;
        }

    }
}

svg {
    fill: $colorOsloGrey;
    z-index: 5;
    transition: fill .5s ease-in-out;

}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background-color: $colorWhite;
    border: 1px solid transparent;
    cursor: pointer;
    transition: background-color .5s ease-in-out;

}
</style>
