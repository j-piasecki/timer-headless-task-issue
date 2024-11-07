async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = async taskData => {
  for (let i = 0; i < 10; i++) {
    console.log(`Task ${taskData.taskName} is running...`);
    await sleep(2000);
  }
};
