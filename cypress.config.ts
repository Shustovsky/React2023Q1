import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5555',
    video: false,
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },
});
