<template>
  <div v-if="projects.length" class="container-fluid">
    <div class="row mt-3">
      <!-- REVIEW Step 5: dump data on page -->
      <div v-for="p in projects" class="col-md-3 mb-3 p-1">
        <ProjectCard :project="p" />
      </div>
    </div>
  </div>
  <div v-else class="container-fluid">
    <LoadingBoy />
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js';
import { projectsService } from '../services/ProjectsService.js'
import Pop from '../utils/Pop.js';
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import ProjectCard from '../components/ProjectCard.vue';
import LoadingBoy from '../components/LoadingBoy.vue';

export default {
  setup() {
    async function getProjects() {
      try {
        await projectsService.getProjects();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    // REVIEW Step 1: go get my data
    onMounted(() => {
      getProjects();
    });
    return {
      projects: computed(() => AppState.projects)
    };
  },
  components: { ProjectCard, LoadingBoy }
}
</script>

<style scoped lang="scss"></style>
