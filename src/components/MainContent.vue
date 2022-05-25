<script setup>

</script>

<template>

    <div class="wholeSplit">

        <div class="leftSplit">
        </div>

        <div class="middleSplit">

            <h2 class="subTitle" id="AboutMe">About Me</h2>
            
            <div class="aboutMeContent">
                <p>Hi`How yo doing. Having a nice break, ahah?</p>
            </div>
            

            <h2 class="subTitle" id="Projects">Projects</h2>

            
            <div class="projectSec">

            </div>
            
        </div>
        

        <div class="rightSplit">
            
            <div class="stickyNav">
                <h3 class="NavContent">Contents</h3>
                <div class="NavItems">
                    <a href="#headerNav" class="Navitem">Header</a>
                    <a href="#AboutMe" class="Navitem">About Me</a>
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
    height: 100vh;
}

.leftSplit {
    width: 15%;
}

.middleSplit {
    width: 70%;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #DEE4E7;
}

.subTitle {
    color: rgb(16, 7, 58);
    margin: 50px;
    border-bottom-style: solid;

}

.rightSplit {
    width: 15%;
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

.aboutMeContent{
    color: #000;
    margin-left: 50px;
    margin-right: 50px;
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