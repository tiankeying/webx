<template>
    <div class="home-mobile">
     <!-- <Navbar/> -->
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
// import Navbar from '../../components/Navbar.vue'
export default {
    name: 'HomeMobile',
    setup() {
        const { t } = useI18n()
    // const backgroundImage = new URL('@/assets/static/index_img/OpenVault-1.png', import.meta.url).href;
    // const currentBackgroundImage = ref(backgroundImage);
    return { t}
    }
}
</script>

<style scoped lang="scss">
.card_hom3 {
    padding: 2.67vw 3.73vw;

    .text1 {
        font-weight: 400;
        font-size: 6.67vw;
        color: #FEFEFE;
        padding-bottom: 2.93vw;

    }
.text{
    color: #B4B4B4;
    font-size: 2.67vw; /* 26px → (26/750*100)≈3.4667vw */
    line-height: 5.4667vw; /* 41px → (41/750*100)≈5.4667vw */
}
}
.gradient-text {
    background: linear-gradient(0deg, #E9CA8D 0%, #FFE4BB 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    display: inline;
    
    font-size: 4.5333vw; /* 34px → (34/750*100)≈4.5333vw */
}

.text {
    font-weight: 400;
    font-size: 2.4vw ; /* 18px → (18/750*100)=2.4vw */
    color: #B4B4B4;
    line-height: 4vw; /* 30px → (30/750*100)=4vw */
    max-width: 30ch;
    word-wrap: break-word;
}

.button_text {
    background: linear-gradient(90deg, #E9CA8D, #FFE4BB);
    padding: 0.6667vw 2vw; /* 0.5rem≈7.5px→1vw, 1.5rem≈22.5px→3vw */
    font-size: 3.2vw; /* 1rem≈15px→2vw */
    line-height: 1.5;
    border-radius: 0.5vw; /* 0.375rem≈5.625px→0.75vw */
    color: #333333;
}

.p_text {
    font-weight: 400;
    font-size: 3.4667vw; /* 26px → (26/750*100)≈3.4667vw */
    color: #FEFEFE;
    line-height: 5.4667vw; /* 41px → (41/750*100)≈5.4667vw */
}

.button_text2 {
    border: 1px #E9CA8E solid;
    color: #E9CA8E;
    background-color: #121317;
    padding: 0.6667vw 2vw; /* 同上 */
    font-size: 3.2vw;
    line-height: 1.5;
    border-radius: 0.5vw; /* 同上 */
}
.button_text3 {
    border: 1px #E9CA8E solid;
    color: #E9CA8E;
    background-color: #121317;
    padding: 0.6667vw 2vw; /* 同上 */
    font-size: 4.53vw;
    line-height: 1.5;
    border-radius: 0.5vw; /* 同上 */
}

.div_text {
    font-weight: 500;
    font-size: 2.1333vw; /* 16px → (16/750*100)≈2.1333vw */
    color: #999999;
    line-height: 3.2vw; /* 24px → (24/750*100)=3.2vw */
    padding: 1.3333vw 0; /* 10px → (10/750*100)≈1.3333vw */
}

h3 {
    font-weight: 400;
    font-size: 3.2vw; /* 24px → (24/750*100)=3.2vw */
    color: #FEFEFE;
    line-height: 4vw; /* 30px → (30/750*100)=4vw */
}

.home-mobile {
    //margin-top: 6.6667vw; /* 50px → (50/750*100)≈6.6667vw */
   
    background-color: #030304;

    .banner-content {
        background-image: url();
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin: 0 0 13.3333vw; /* 100px → (100/750*100)≈13.3333vw */

        h2 {
            color: #F1D3A6;
            font-size: 4.5333vw; /* 34px */
            padding: 3.6vw 0 4.2667vw; /* 27px→3.6vw, 32px→4.2667vw */
            font-weight: 400;
        }

        p {
            color: #D0CFCF;
            font-size: 2.4vw; /* 18px */
            padding: 0;
        }
    }

    .banner-content img {
        max-width: 100%;
        height: auto;
        padding: 7.3333vw 0 0; /* 55px → (55/750*100)≈7.3333vw */
    }

    .home2 {
        padding: 4vw; /* 30px → (30/750*100)=4vw */
        max-width: 160vw; /* 1200px → (1200/750*100)=160vw */
        margin: 0 auto;

        .home2_div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.3333vw; /* 10px → (10/750*100)≈1.3333vw */

            .home2_l, .home2_r {
                flex: 1;
                min-width: 0;
            }

            .home2_r img {
                max-width: 100%;
                height: auto;
                display: block;
            }
        }
    }


.home4 {
    text-align: center;
    padding: 30.6667vw 0 1.3333vw; /* 230px→30.6667vw, 10px→1.3333vw */
    // background-image: url('../../assets/static/h5_img/背景.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    h2 {
        font-weight: 400;
        font-size: 4vw; /* 30px → (30/750*100)=4vw */
        color: #E9CA8D;
        padding: 2.6667vw 0; /* 20px */
    }

    p {
        font-weight: 400;
        font-size: 3.2vw; /* 24px */
        color: #E9CA8D;
    }

    .email_inp {
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            margin-right: 2.1333vw; /* 16px → (16/750*100)≈2.1333vw */
            background: #2F313B;
            border-radius: 3.0667vw; /* 23px → (23/750*100)≈3.0667vw */
            padding: 0 4vw; /* 30px → (30/750*100)=4vw */
            height: 6.4vw; /* 48px → (48/750*100)=6.4vw */
        }

        button {
            background: linear-gradient(180deg, #FFE5B2, #E9CA8D);
            border-radius: 3.2vw; /* 24px → (24/750*100)=3.2vw */
            width: 15.0667vw; /* 113px → (113/750*100)≈15.0667vw */
            height: 6.4vw; /* 48px */
            font-size: 2.66vw; /* 原字体大小 */
        }
    }
}

}

.banner-image-container {
    position: relative;
    width: 100%;
}

.banner-overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    color: white; // 假设文字颜色为白色，可根据实际情况调整
    padding: 4vw; /* 30px → (30/750*100)=4vw */
}
.home3 {
        max-width: 160vw;
        /* 1200px */
        margin: 0 auto;
        overflow: hidden;
        padding: 4vw;

    }
    

    .home3_div {
        padding-bottom: 17.3333vw;
        /* 1.3rem * 100 / 7.5 */
        padding-top: 5.3333vw;
        /* 0.4rem * 100 / 7.5 */
        width: 100%;
        flex-direction: column;

        .home3_l,
        .home3_r {
            flex: 1;
            min-width: 0;
            box-sizing: border-box;
            background: #121317;
            border-radius: 1.3333vw;
            /* 0.1rem * 100 / 7.5 */
        }

        .home3_l {
            margin-bottom: 8vw;
            /* 0.6rem * 100 / 7.5 */
        }

        img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center;
        }
    }
</style>