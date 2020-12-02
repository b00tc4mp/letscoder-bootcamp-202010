try {
  console.log("Start of try runs");
  unicycle;
  console.log(" End of try runs -- never reached");
} catch (error) {
  console.log("Error has ocurred: " + error.stack);
}
