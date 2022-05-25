<script setup>
import { Transition, TransitionGroup, ref, onMounted } from "vue";
import { gsap } from 'gsap';
import { commonAPI } from '../api/common.js';

const { LinkedInClick, GithubClick } = commonAPI();

const introText = ref('I\'m a recent graduate Computing Science & Statistics student at the University of Alberta.')
const introTextShow = ref('')
var i = 0;


function typeWriter() {
    if (i < introText.value.length) {
        introTextShow.value += introText.value.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

function introBeforeEnter(el) {
    gsap.set(el, {
        transform: 'translate(50, 40)',
        y: 0,
        opacity: 0
    });
};

function introEnter(el, done) {
    gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: 'circ.out',
        onComplete: done
    });
};

function nameBeforeEnter(el) {
    gsap.set(el, {
        transform: 'translate(50, 40)',
        y: 0,
        opacity: 0,
    })
};

function nameEnter(el, done) {
    gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 2,
        ease: 'none',
        onComplete: done
    });
};

function introTextBeforeEnter(el) {
    gsap.set(el, {
        transform: 'translate(50, 40)',
        y: 0,
        opacity: 0,
    })
};

function introTextEnter(el, done) {
    gsap.to(el, {
        duration: 0,
        y: 0,
        opacity: 1,
        delay: 3,
        ease: 'none',
        onComplete: done
    });
    setTimeout(typeWriter, 3000);
};

function btnBeforeEnter(el) {
    gsap.set(el, {
        transform: 'translate(50, 40)',
        y: 0,
        opacity: 0,
    })
};

function btnEnter(el, done) {
    gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 4,
        ease: 'none',
        onComplete: done
    });
};

</script>


<template>
    <div class="hero" id="headerNav">

        <video autoplay muted loop class="Hero-back-video">
            <source src="../assets/Hero-moon.mp4" type="video/mp4">
        </video>
        
        <div class="Hero-content">
            <div>
                <div class="nameIntro">
                    <transition name="text" appear
                        @before-enter="introBeforeEnter"
                        @enter="introEnter"
                        :css="false"
                    >
                        <h1 style="display:inline" id="intro">
                            Hi, I'm 
                        </h1>
                    </transition>
                    <Transition name="text" appear
                        @before-enter="nameBeforeEnter"
                        @enter="nameEnter"
                        :css="false"
                    >   
                        <h1 style="display:inline" id="name">
                            Shuxin.
                        </h1>
                    </Transition>
                </div>
                <Transition name="text" appear
                    @before-enter="introTextBeforeEnter"
                    @enter="introTextEnter"
                    :css="false"
                >
                    <p id="intro_text">{{ introTextShow }}</p> 
                </Transition>
                

            </div>
            
            <div class="buttons">

                <Transition appear
                    @before-enter="btnBeforeEnter"
                    @enter="btnEnter"
                    :css="false"
                >
                    <v-btn class="btn" @click="GithubClick" variant="outlined" size="large">
                        <v-icon start icon="mdi-file-account"></v-icon>
                        Resume   
                    </v-btn>
                </Transition>
                <Transition appear
                    @before-enter="btnBeforeEnter"
                    @enter="btnEnter"
                    :css="false"
                >
                    <v-btn class="btn" @click="LinkedInClick" variant="outlined" size="large">
                        <v-icon start icon="mdi-linkedin"></v-icon>
                        LinkedIn    
                    </v-btn>
                </Transition>
                <Transition appear
                    @before-enter="btnBeforeEnter"
                    @enter="btnEnter"
                    :css="false"
                >
                    <v-btn class="btn" @click="GithubClick" variant="outlined" size="large">
                        <v-icon start icon="mdi-github"></v-icon>
                        Github   
                    </v-btn>
                </Transition>
                
            </div>
        </div>
    
    </div>
</template>


<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bungee);
@import url(http://fonts.cdnfonts.com/css/roboto);
@import url(https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css);


.Hero-back-video {
    position: relative;
    object-fit: cover;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    max-height: 100vh;
}

.Hero-content {
    font-size: 40px;
    width: 100%;
    position: absolute;
    top: 45vh;
    left: 0;
}

.nameIntro {
    align-self: center;
}

.buttons {
    font-family: 'roboto';
    padding: 20px;
    padding-right: 75px;
    top: 65vh;
}

.btn {
    background-color: rgba(255, 255, 255, 0);
    border: 2px solid;
    color: #c2bfd1;
    border-radius: 8px;
    padding: 14px 26px;
    text-align: center;
    font-size: 16px;
    transition: 0.3s;
}

/* Darker background on mouse-over */
.btn:hover {
    background-color: RoyalBlue;
    color: #ffffff;
    border-color: RoyalBlue;
}

.btn + .btn {
    margin-left: 20px;
}

#intro {
    font-family: 'Bungee';
    color: #ffffff;
}

#name {
    font-family: 'Bungee';
    color: #12093b;
}

#intro_text {
    font-family: 'Century Gothic';
    color: rgba(150, 253, 109, 0.623);
    font-size: 20px;
    margin: 0;
    top: 0px;
}

</style>