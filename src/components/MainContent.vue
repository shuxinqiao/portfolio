<script setup>
function DryBeanClick() {
    window.open("https://github.com/shuxinqiao/Dry-Bean-Classification",'_blank')
};

function NogoClick() {
    window.open("https://github.com/shuxinqiao/Nogo-MCTS-player",'_blank')
};
</script>

<template>

    <!-- Content Section -->
    <div class="wholeSplit">

        <!-- Content Left Split -->
        <div class="leftSplit">
            
        </div>


        <!-- Content Middle Split -->
        <div class="middleSplit">
            
            <!-- About Me Section -->
            <div class="ContentDiv">

                <h2 class="subTitle" id="AboutMe">About Me</h2>
                
                
                <div class="aboutMeContent">
                    <div style="margin-left: 70px; font-size: large;">
                        <p>I am</p>
                        <h2>Shuxin Qiao</h2>
                        <br>
                        <p>A programmer and analyst inspired by tough problems.</p>
                        <br>
                    </div>
                    <img src="../assets/profile_photo.jpg" class="profileImg" alt="Shuxin Qiao's profile photo"> 
                </div>

            </div>

            <!-- Skill Set Section-->
            <div class="ContentDiv">
                <h2 class="subTitle" id="SkillSets">Skill Sets</h2>

                <!-- First Line -->
                <div class="skillIcons" id="first_line">
                    <ul>
                        <li class="iconNtext">
                            <img src="../assets/python-svgrepo-com.svg" alt="python language logo">
                            <span>Python</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/c-svgrepo-com.svg" alt="C language logo">
                            <span>C</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/c-sharp-svgrepo-com.svg" alt="C sharp language logo">
                            <span>C#</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/r-svgrepo-com.svg" alt="R language logo">
                            <span>R</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/js-official-svgrepo-com.svg" alt="JavaScript language logo">
                            <span>JavaScript</span>
                        </li>
                        
                        
                    </ul>
                </div>

                <!-- Second Line -->
                <div class="skillIcons" id="second_line">
                    <ul>
                        <li class="iconNtext">
                            <img src="../assets/git-svgrepo-com.svg" alt="git logo">
                            <span>Git</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/html-5-svgrepo-com.svg" alt="HTML 5 language logo">
                            <span>HTML</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/css-3-svgrepo-com.svg" alt="CSS 3 language logo">
                            <span>CSS</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/logo.png" alt="Vue framework logo">
                            <span>Vue</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/sql-database-generic-svgrepo-com.svg" alt="SQL logo">
                            <span>SQL</span>
                        </li>
                    </ul>
                </div>

            </div>


            <!-- Project Section -->
            <div class="ContentDiv">

                <h2 class="subTitle" id="Projects">Projects</h2>

                <div class="projectSec">

                    <!-- Dry Bean Card-->
                    <div class="card" id="DryBean">
                        <img src="../assets/dry-bean.jpg" alt="7 dry bean types picture" style="width:320px">
                        <div class="cardContainer">
                            <h4><b>Dry Bean Classification - Python</b></h4>
                            <br>
                            <p>Dry Bean Dataset pubulished by Selcuk University.</p>
                            <br>
                            <p>
                                Uses Softmax Regression, SVM and Neural Network three models. Except NN used Keras,
                                the other two were developed from scratch. Around 91% accuracy meets by all three models.
                            </p>
                            <br>
                            <p>Result report can be found in github page pdf file - "Dry-Bean-Classification-Report.pdf".</p>
                        </div>
                        <v-btn
                            icon="mdi-xml"
                            @click="DryBeanClick"
                            variant="text"
                            class="cardBtn"
                        ></v-btn>
                    </div>

                    <!-- NoGo Game Card -->
                    <div class="card" id="Nogo">
                        <img src="../assets/NoGo.png" alt="Nogo Game Screenshot" style="width:320px">
                        <div class="cardContainer">
                            <h4><b>Nogo Game MCTS Player - Python</b></h4>
                            <br>
                            <p>
                                A Monte Carlo Tree Search Player. Wins Quater-final in 200 attendence course.
                            </p>
                        </div>
                        <v-btn
                            icon="mdi-xml"
                            @click="NogoClick"
                            variant="text"
                            class="cardBtn"
                        ></v-btn>
                    </div>

                </div>

            </div>
            
        </div>
        
        
        <!-- Content Right Split -->
        <div class="rightSplit">
            
            <!-- Side Navigation -->
            <div class="stickyNav">
                <h3 class="NavContent">Contents</h3>
                <div class="NavItems">
                    <a href="#headerNav" class="Navitem">Header</a>
                    <a href="#AboutMe" class="Navitem">About Me</a>
                    <a href="#SkillSets" class="Navitem">Skill Sets</a>
                    <a href="#Projects" class="Navitem">Projects</a>

                    <a href="#DryBean" class="Navitem Indentation">Dry Bean Classification</a>
                    <a href="#Nogo" class="Navitem Indentation">Nogo Game Player</a>

                    <a href="#footerNav" class="Navitem">Footer</a>
                </div>
            </div>

        </div>

    </div>
    

</template>

<style scoped>
.wholeSplit {
    display: flex;
}

.leftSplit {
    width: 15%;
}

.middleSplit {
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #f5f7f8;
}

/* Content Middle */
.ContentDiv {
    flex: 1;
    flex-direction: column;
}

.subTitle {
    flex: 1;
    color: rgb(16, 7, 58);
    margin: 50px;
    border-bottom-style: solid;
    max-height: 50px;
}

.rightSplit {
    width: 15%;
}


.aboutMeContent{
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    color: #000;
    margin-left: 50px;
    margin-right: 50px;
}

.profileImg{
    flex: 1;
    max-width: 458px;
    margin-right: 70px;
}

.skillIcons {
    margin: 50px;
    margin-left: 80px;
    margin-right: 80px;
}

#first_line{
    margin-left: 0px;
    margin-right: 100px;
}

#second_line{
    margin-left: 100px;
    margin-right: 0px;
}


.skillIcons ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.iconNtext {
    color: rgb(0, 0, 0);
    font-weight: bold;
    transition: transform .2s;
}

.iconNtext img{
    height: 100px;
    width: 100px;
}

.iconNtext:hover{
    transform: scale(1.5);
}

.iconNtext span{
    text-align: center;
    display: block;;
    color: rgb(0, 0, 0);
}

/* Project Section */
.projectSec {
    display: flex;
    flex-direction: column;
    margin: 50px;
    margin-left: 80px;
    margin-right: 80px;
}

.card {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-bottom: 50px;
    background-color: rgba(120, 209, 154, 0.658);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.cardBtn {
    position: absolute;
    top: 5px;
    right: 10px;
}

.cardContainer {
    padding: 12px 16px;
}

.card:hover {
    box-shadow: 12px 8px 16px 12px rgba(0,0,0,0.2);
}


/* Side Navigation Section */
.stickyNav {
    position: sticky;
    text-align: left;
    margin-top: 50px;
    margin-left: 20%;
    top: 50px;
    color: #241D44;
}

.NavItems {
    border-left-style: solid;
    border-color: #241D44;
    padding-left: 10px;
}

.Navitem {
    margin-bottom: 5px;
    display: table;
}

.NavContent {
    margin-bottom: 10px; 
    text-shadow: 2px 2px 4px #a2b0ca;
}

.Indentation {
    margin-left: 20px;
}

a {
    position: relative;
    color: #000;
    text-decoration: none;
}

a:hover {
    color: #000;
}

a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(67, 101, 253);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

a:hover::before {
    transform: scaleX(1);
}


</style>