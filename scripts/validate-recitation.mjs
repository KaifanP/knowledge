import { recitation } from "../src/content/recitation.js";

const CHAPTER_IDS = [
  "wk1-os", "wk2-process", "wk3-cpu", "wk3-ipc", "wk4-memory", "wk5-security",
  "wk6-osi", "wk7-sockets", "wk7-dns", "wk8-udp", "wk8-http", "wk9-tcp",
  "wk9-protocol", "wk10-addressing", "wk10-congestion", "wk11-routing",
  "wk11-control", "wk12-nat"
];

const REQUIRED = ["en", "zh", "answerEn", "answerZh"];
const MIN_ITEMS = 10;
let errors = 0;

const reciteIds = Object.keys(recitation);

for (const id of CHAPTER_IDS) {
  if (!recitation[id]) {
    console.error(`MISSING chapter: ${id}`);
    errors++;
  }
}

for (const id of reciteIds) {
  if (!CHAPTER_IDS.includes(id)) {
    console.error(`UNKNOWN chapter id in recitation: ${id}`);
    errors++;
  }
}

for (const id of CHAPTER_IDS) {
  const block = recitation[id];
  if (!block) continue;
  if (!block.summary || !block.summaryZh) {
    console.error(`${id}: missing summary/summaryZh`);
    errors++;
  }
  const items = block.items || [];
  if (items.length < MIN_ITEMS) {
    console.error(`${id}: only ${items.length} items (need >= ${MIN_ITEMS})`);
    errors++;
  }
  items.forEach((item, i) => {
    for (const field of REQUIRED) {
      if (!item[field]?.trim()) {
        console.error(`${id} item ${i + 1}: missing ${field}`);
        errors++;
      }
    }
  });
  console.log(`${id}: ${items.length} items OK`);
}

if (errors) {
  console.error(`\n${errors} validation error(s)`);
  process.exit(1);
}
console.log(`\nAll ${CHAPTER_IDS.length} chapters validated.`);
