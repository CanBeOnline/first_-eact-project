
import searchItunes from "./searchItunes.mjs";

async function runExamples() {


  await searchItunes("The Beatles");
  await searchItunes("Eminem");
  await searchItunes("Adele");
  await searchItunes("Rihanna");
}


runExamples();


export default searchItunes;