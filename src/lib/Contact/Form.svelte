<script>
  import Input from "./Input.svelte";
  import Textarea from "./Textarea.svelte";
  import Submit from "./Submit.svelte";
  import { toast, Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";
  let data = {};

  const fetchData = async () => {
    try {
      const response = await fetch("/api/secret");
      if (!response.ok) throw new Error("Network response was not ok");
      data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  onMount(() => {
    fetchData();
  });
</script>

<div class="flex flex-col gap-4">
  <div class="text-xl">
    Email:  rajputabhinav1245@gmail.com
  </div>
  <div class="flex flex-row justify-evenly">
    <a href="https://twitter.com/DAbhinav6" target="_blank">
      <img src="./Icons/twitter.svg" alt="twitter" class="w-14 h-auto">
    </a>
    <a href="https://www.instagram.com/__abhinav29__/" target="_blank">
      <img src="./Icons/instagram.svg" alt="instagram" class="w-14 h-auto">
    </a>
  </div>
</div>
