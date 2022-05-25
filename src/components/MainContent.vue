<script setup>

</script>

<template>

    <div class="wholeSplit">

        <div class="leftSplit">
            
        </div>

        <div class="middleSplit">
            
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
                    <img src="../assets/profile_photo.jpg" class="profileImg"> 
                </div>
            </div>

            <div class="ContentDiv">
                <h2 class="subTitle" id="SkillSets">Skill Sets</h2>

                <div class="skillIcons">
                    <ul>
                        <li class="iconNtext">
                            <img src="../assets/python-svgrepo-com.svg">
                            <span>Python</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/c-svgrepo-com.svg">
                            <span>C</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/c-sharp-svgrepo-com.svg">
                            <span>C#</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/r-svgrepo-com.svg">
                            <span>R</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/js-official-svgrepo-com.svg">
                            <span>JavaScript</span>
                        </li>
                        
                        
                    </ul>
                </div>

                <div class="skillIcons">
                    <ul>
                        <li class="iconNtext">
                            <img src="../assets/git-svgrepo-com.svg">
                            <span>HTML</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/html-5-svgrepo-com.svg">
                            <span>HTML</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/css-3-svgrepo-com.svg">
                            <span>CSS</span>
                        </li>
                        <li class="iconNtext">
                            <img src="../assets/logo.png">
                            <span>Vue</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="ContentDiv">
                <h2 class="subTitle" id="Projects">Projects</h2>

                <div class="projectSec">

                </div>
            </div>
            
        </div>
        

        <div class="rightSplit">
            
            <div class="stickyNav">
                <h3 class="NavContent">Contents</h3>
                <div class="NavItems">
                    <a href="#headerNav" class="Navitem">Header</a>
                    <a href="#AboutMe" class="Navitem">About Me</a>
                    <a href="#SkillSets" class="Navitem">Skill Sets</a>
                    <a href="#Projects" class="Navitem">Projects</a>

                    <a href="#NogoPlayer" class="Navitem Indentation">Nogo Player</a>

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
}

.skillIcons ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.iconNtext {
    color: rgb(0, 0, 0);
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