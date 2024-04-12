// test/mock/MockScheduler.ts
class MockScheduler {
  private jobs: { [key: string]: Function } = {};

  registerJob(name: string, job: Function) {
    this.jobs[name] = job;
  }

  async triggerJob(name: string) {
    if (this.jobs[name]) {
      await this.jobs[name]!();
    }
  }
}

export default MockScheduler;
