---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
navbar: false
hero:
    name: "CS408 Notes"
    text: "Some knowledge of Computer Networks & Computer Organization & Data Structure & Operating Systems."
    actions:
        - theme: brand
          text: Getting Start
          link: /quick-start
        - theme: alt
          text: Play Music
          link: "javascript:void(0)"
          id: player
---

<script setup>
import VideoBackground from "../src/components/VideoBackground.vue";
import { onMounted } from "vue";
import mdKatex from "markdown-it-katex";

onMounted(() => {
  console.log(mdKatex);
  console.log(2);
  document.querySelectorAll("a.VPButton")[1].addEventListener("click", (event) => {
    event.preventDefault();
    const audio = document.querySelector("#msc");
    if (audio.paused) audio.play();
    else audio.pause();
  });
});
</script>

<VideoBackground path="/cs408-notes/resources/chise.mp4" />
<audio src="/cs408-notes/resources/Blooming Moon.mp3" loop id="msc" />
