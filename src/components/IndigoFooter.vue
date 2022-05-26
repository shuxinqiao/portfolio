<script setup>
import { ref } from 'vue';
import { commonAPI } from '../api/common.js';

const { LinkedInClick, GithubClick } = commonAPI();

const name = ref('Shuxin Qiao');
const email = ref('shuxinqiao@gmail.com');
const address = ref('Edmonton, AB, Canada');
const AboutPage = ref('This website was coded in HTML, CSS, JS and Vue 3 + Vuetify 3 as framework.');
const AboutPage_2 = ref('It is hosted on a VPS from Vultr and uses Nginx for reverse proxy.');
const AboutPage_3 = ref('Original code git is ');

</script>

<template>
    <!-- Footer Section -->
    <div class="indi_footer" id="footerNav">

        <!-- Ref Buttons -->
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

        <!-- Footer Content -->
        <div class="half_split">

            <!-- About Page -->
            <div class="left_half">
                <h2 class="notesHead">About This Page</h2>
                <p>{{ AboutPage }}</p>
                <p>{{ AboutPage_2 }}</p>
                <br>
                <p>{{ AboutPage_3 }}<a class='link' href="https://github.com/shuxinqiao/portfolio" target="_blank">here.</a></p>
            </div>

            <!-- Contact Me -->
            <div class="right_half">
                <h2 class="notesHead">Contact Me</h2>
                <p>{{ name }}</p>
                <p>{{ address }}</p>
                <a class='link' href="mailto:shuxinqiao@gmail.com">{{ email }}</a>
                <br>
                <a class='link' href="../assets/ShuxinQiao_Resume.pdf" target="_blank">My Resume</a>
            </div>

        </div>

        <!-- Footer Bottom Info -->
        <div class="bottom_CR">
            <p>Copyright ©2022 All rights reserved</p>
        </div>

    </div>
</template>


<style scoped>
.indi_footer {
    background-color: #241D44;
    font-family: Century Gothic;
    color: #ffffff;
    padding: 40px;
}

.icon_btn {
    margin-bottom: 20px;
}


.half_split{
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 40px;
    justify-content: space-evenly;
    text-align: left;
    color: #ffffff;
}


.left_half {
    width: auto;
}

.right_half {
    width: auto;
}

.notesHead {
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffffff;
}

.bottom_CR {
    font-size: small;
}

.link {
    color:#b1a1f5;
}
</style>