import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},

  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Profile.js').Profile|null} */
  profile: null,

  // REVIEW Step 3: set up somewhere to store your data
  /** @type {import('./models/Project.js').Project[]} */
  projects: [],

  /** @type {import('./models/Project.js').Project|null} */
  project: null
})
