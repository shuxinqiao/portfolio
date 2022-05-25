<script setup>

</script>

<template>

    <div class="wholeSplit">

        <div class="leftSplit">
            <p>what</p>
        </div>

        <div class="middleSplit">
            
            <p>a</p>
            <p>b</p>
            <p>c</p>
            
        </div>
        
        <div class="rightSplit">
            
            <div class="stickyNav">
                <h3 class="NavContent">Contents</h3>
                <div class="NavItems">
                    <a href="#headerNav" class="Navitem">Header</a>
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
}

.rightSplit {
    width: 15%;
}

.stickyNav {
    position: sticky;
    text-align: left;
    margin-top: 30px;
    margin-left: 20%;
    top: 30px;
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