<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
    selector: "body",
    attribute: "theme",
    valueDark: "custom-dark",
    valueLight: "custom-light"
});
const toggleDark = useToggle(isDark);
library.add(faGithub, faInstagram, faXTwitter)

// ///////////////////////////////////////////////////////////////////////

import { useRouter } from 'vue-router'

const router = useRouter()

const deftonesporra = () => {
    router.push('/deftones')
}
</script>

<template>
    <header>
        <img @click="toggleDark()" class="avatar" src="https://github.com/kyoshiblood.png" alt="kyoshiblood github avatar">

        <div class="presentation">
            <h1>kyoshiblood {{ isDark ? '' : '(has dark mode)' }}</h1>
            <p>Hey! I'm Fernando, but you can say kyoshi <br>
                Programming has been my area since I was a child, here you much about me.
            </p>

            <h2>THE LIFE IS UNDERRATED. <button @click="deftonesporra">🤘</button></h2>
        </div>
    </header>

    <main>
        <div>
            <h2>About me</h2>
            <p>As you already know, my name is Fernando, a Brazilian back-end developer. I am currently a Computer Science student at the Federal Institute of Bahia. I am currently looking for new challenges.</p>
        </div>
        <div></div>
    </main>
    

    <footer>
        <ul id="social">
            <h2>Social</h2>

            <div>
                <li><a target="_blank" href="https://github.com/kyoshiblood">
                        <FontAwesomeIcon :icon="['fab', 'github']" />
                    </a></li>
                <li><a target="_blank" href="https://instagram.com/fernanndoxz">
                        <FontAwesomeIcon :icon="['fab', 'instagram']" />
                    </a></li>
                <li><a target="_blank" href="https://x.com/fernarocheiro_">
                        <FontAwesomeIcon :icon="['fab', 'x-twitter']" />
                    </a></li>

            </div>
        </ul>

        <div></div>
    </footer>
</template>

<style>


header {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 2rem;

    border: 1px solid gray;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}

[theme="custom-dark"] {
    background-color: #121212;
    color: #ffffff;
}

[theme="custom-dark"] img {
    border: 3px solid #ffffff
}

[theme="custom-dark"] a {
    color: gray;
}

[theme=custom-dark] a:hover {
    color: #fff;
}

a:hover {
    color: gray
}
 
main {
  display: flex;
  justify-content: center;
}

main p {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
}

.avatar {
    width: 256px;
    height: 256px;

    border-radius: 25px;
    border: 3px solid black;
}

.presentation {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 1.4rem;
}

.presentation h1 {
    font-family: 'Gill Sans', sans-serif;
}

.presentation p {
    font-family: 'Roboto', sans-serif;
}

.presentation h2 {
    padding: 0;
    font-family: 'Abril Fatface', sans-serif;
    font-weight: 500;
}

#social {
    display: flex;
    align-items: center;
    flex-direction: column;

    list-style: none;
}

#social div {
    display: flex;
    gap: 10px;
    font-size: 2.4rem;
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    text-decoration: none;
    color: #000000;
}

button {
    background: transparent;
    border: 0;

    font-size: 24px;

    cursor: pointer;
}


@media (max-width: 768px) {
    header {
        display: flex;
        flex-direction: column;
    }

    main {
        display: block;
        text-align: center;
        line-height: 1.2;
    }

    .presentation {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .avatar {
        width: 128px;
        height: 128px;
        margin-bottom: -20px;
    }

    #social {
        padding: 10px;
    }
}
</style>
