<script>
  import Icon from "./Icon.svelte";
  let icons = [
    {
      src: "./Icons/resumeicon.png",
      dest: "https://drive.google.com/file/d/1N5bBYDqrfMk0ZEeZRi25YGkE3CkVNlRM/view",
      alt: "resume",
    },
    {
      src: "./Icons/linkedinicon.png",
      dest: "https://www.linkedin.com/in/abhinav-kumar-1127a9268/",
      alt: "linkedin",
    },
    {
      src: "./Icons/githubicon.png",
      dest: "https://github.com/Abhinav2929",
      alt: "github",
    },
  ];
</script>

<ul>
  {#each icons as icon}
    <Icon iconData={icon} />
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: row;
    gap: 4vw;
  }
</style>
