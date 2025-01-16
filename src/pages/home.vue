<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

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
        <img class="avatar" src="https://github.com/kyoshiblood.png" alt="kyoshiblood github avatar">

        <div class="presentation">
            <h1>kyoshiblood</h1>
            <p>Hey! I'm Fernando, but you can say kyoshi <br>
                Programming has been my area since I was a child, here you much about me.
            </p>

            <h2>THE LIFE IS UNDERRATED. <button @click="deftonesporra">🤘</button></h2>
        </div>
    </header>

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
    </footer>
</template>

<style scoped>
* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

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
    padding: 2rem;
}

.presentation h2 {
    padding: 0;
}

#social {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

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
    flex-direction: column;
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

    .presentation {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .avatar {
        width: 128px;
        height: 128px;
    }

    #social {
        padding: 10px;
    }
}
</style>
