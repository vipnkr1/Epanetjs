import "./styles.css";

import { Project, Workspace } from "epanet-js";
import fs from "fs";

// Read an existing inp file from the disk
const net1 = fs.readFileSync("net1.inp");

// Initialise a new Workspace and Project object
const ws = new Workspace();
const model = new Project(ws);

// Write a copy of the inp file to the workspace
ws.writeFile("net1.inp", net1);

// Runs toolkit methods: EN_open, EN_solveH & EN_close
model.open("net1.inp", "report.rpt", "out.bin");
model.solveH();

const numberOfLink = model.getCount(0);
let myText = "";
for (let i = 1; i <= numberOfLink + 1; i++) {
  myText +=
    model.getLinkId(i) +
    " " +
    model.getLinkNodes(i).node1 +
    " " +
    model.getLinkNodes(i).node1 +
    " " +
    model.getLinkValue(i, 0) +
    " " +
    model.getLinkValue(i, 1) +
    " " +
    model.getLinkValue(i, 2) +
    " " +
    model.getLinkValue(i, 3) +
    " " +
    model.getLinkValue(i, 4) +
    " " +
    model.getLinkValue(i, 5) +
    " " +
    model.getLinkValue(i, 6) +
    " " +
    model.getLinkValue(i, 7) +
    " " +
    model.getLinkValue(i, 8) +
    " " +
    model.getLinkValue(i, 9) +
    " " +
    model.getLinkValue(i, 10) +
    " " +
    model.getLinkValue(i, 11) +
    " " +
    model.getLinkValue(i, 12) +
    "\n";
}
model.close();

// const reportFile = ws.readFile("report.rpt");
// document.getElementById("epanet-report").innerHTML = reportFile;

document.getElementById("my-details").innerHTML = myText;
