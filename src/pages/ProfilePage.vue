<template>
  <div v-if="profile" class="container">
    <div class="row mt-4">
      <div class="col-12 text-center">
        <img :src="profile.picture" alt="" class="profile-picture rounded-circle">
      </div>
      <div class="col-12 text-center">
        <img :src="profile.coverImg" alt="" class="img-fluid cover-image">
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-3 d-flex justify-content-between align-items-baseline">
        <h1>
          <span :class="`${profile.graduated ? 'cool-font' : ''}`">
            {{ profile.name }}
          </span>
          <span v-if="profile.github">
            <a :href="profile.github" target="_blank">
              <i class="mdi mdi-github mdi-spin"></i>
            </a>
          </span>
        </h1>
        <!-- TODO get this working -->
        <h2>Projects: {{ projects.length }}</h2>
      </div>
      <div class="col-12">
        <p>{{ profile.bio }}</p>
      </div>
    </div>
    <div class="row">
      <div v-for="proj in projects" class="col-md-7 m-auto mb-5">
        <ProjectCard class="elevation-5 border-bottom border-danger border-5" :project="proj" />
      </div>
    </div>
  </div>
  <div v-else class="container-fluid">
    <LoadingBoy />
  </div>
</template>


<script>
import { onMounted, computed, onUnmounted } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { projectsService } from '../services/ProjectsService.js';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {
        const profileId = route.params.profileId;
        // logger.log('here is the profile id', profileId)
        await profilesService.getProfileById(profileId);
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    async function getProjectsByCreatorId() {
      try {
        const profileId = route.params.profileId;
        await projectsService.getProjectsByQuery({ creatorId: profileId });
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }

    onMounted(() => {
      getProfileById();
      getProjectsByCreatorId();
    });

    onUnmounted(() => {
      profilesService.clearProfile()
      projectsService.clearProjects()
    })

    return {
      profile: computed(() => AppState.profile),
      projects: computed(() => AppState.projects)
    };
  },
  components: { ProjectCard }
}
</script>


<style lang="scss" scoped>
.cover-image {
  height: 40vh;
  width: 100%;
  object-fit: cover;
  background-attachment: fixed;
  transform: translateY(-10vh);
}

.profile-picture {
  height: 20vh;
  width: 20vh;
  object-fit: cover;
}

.cool-font {
  font-family: 'Island Moments', cursive;
  font-size: 4em;
}
</style>