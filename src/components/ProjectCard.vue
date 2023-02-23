<template>
  <div class="card">
    <img :src="project.coverImg" class="card-img-top cover-image" :alt="project.title + ' cover image'">
    <div class="card-body d-flex justify-content-between">
      <div>
        <h5 class="card-title mb-3">{{ project.title }}</h5>
        <button @click="setActiveProject()" class="btn btn-danger" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Open Gallery</button>
      </div>
      <router-link :to="{ name: 'Profile', params: { profileId: project.creatorId } }">
        <img :src="project.creator.picture" :alt="project.creator.name" class="profile-picture"
          :title="`Go to ${project.creator.name}'s profile page! ;^)`">
      </router-link>
    </div>
  </div>
</template>


<script>
import { Project } from '../models/Project.js';
import { projectsService } from '../services/ProjectsService.js';

export default {
  props: {
    project: {
      type: Project,
      required: true
    }
  },
  setup(props) {
    return {
      setActiveProject() {
        projectsService.setActiveProject(props.project)
      }
    };
  },
}
</script>


<style lang="scss" scoped>
.cover-image {
  height: 30vh;
  width: 100%;
  object-fit: cover;
}

.profile-picture {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  box-shadow: 2px 2px 4px black;
}
</style>