<script setup>
import { ref } from 'vue';
import { commonAPI } from '../api/common.js';

const { LinkedInClick, GithubClick } = commonAPI();

const icons = ['mdi-linkedin', 'mdi-github'];

const name = ref('Shuxin Qiao');
const email = ref('shuxinqiao@gmail.com');
const address = ref('Edmonton, AB, Canada')
const AboutPage = ref('This website was coded in HTML, CSS, JS and Vue 3 + Vuetify 3 as framework.');
const AboutPage_2 = ref('It is hosted on a VPS from Vultr and uses Nginx for reverse proxy.');
const AboutPage_3 = ref('Original code git is ');

</script>

<template>
    <div class="indi_footer">

        <div class="icon_btn">
            <v-btn
                icon="mdi-linkedin"
                @click="LinkedInClick"
                variant="text"
            ></v-btn>
            <v-btn
                icon="mdi-github"
                @click="GithubClick"
                variant="text"
            ></v-btn>
        </div>

        <div class="divider"></div>

        <div id="half_split">

            <div class="left_half">
                <h2 class="notesHead">About This Page</h2>
                <br>
                <p>{{ AboutPage }}</p>
                <p>{{ AboutPage_2 }}</p>
                <br>
                <p>{{ AboutPage_3 }}<a class='link' href="https://github.com/shuxinqiao/portfolio" target="_blank">here.</a></p>

            </div>

            <div class="right_half">
                <h2 class="notesHead">Contact Me</h2>
                <br>
                <p>{{ name }}</p>
                <p>{{ address }}</p>
                <a class='link' href="mailto:shuxinqiao@gmail.com">{{ email }}</a>
            </div>

            

        </div>

        <div class="bottom_CR">
            <p>Copyright ©2022 All rights reserved</p>
        </div>

    </div>
</template>


<style scoped>
.indi_footer {
    background-color: #241D44;
    font-family: roboto;
    color: #ffffff;
    padding: 40px;
};

.icon_btn {
    margin-bottom: 20px;
};

.divider {
    margin-top: 30px;
};

#half_split{
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 40px;
    justify-content: space-evenly;
    text-align: left;
    color: #ffffff;
};

.left_half {
    flex-grow: 1;
    flex-basis: 50%;
    flex: 1;
};

.right_half {
    flex-grow: 1;
    flex-basis: 50%;
    flex: 1;
};

.notesHead {
    font-weight: bold;
    margin: 20px;
    color: #ffffff;
};

.bottom_CR {
    font-size: small;
};

.link {
    color:#b1a1f5;
};
</style>