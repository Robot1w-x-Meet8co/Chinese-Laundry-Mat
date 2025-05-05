let money = 0;
let machines = 1;
let customerIncome = 10;
let machineUpgradeCost = 50;

// DOM elements
const moneyEl = document.getElementById("money");
const machinesEl = document.getElementById("machines");
const statusEl = document.getElementById("status");
const serveCustomerBtn = document.getElementById("serve-customer");
const upgradeMachineBtn = document.getElementById("upgrade-machine");
const machineListEl = document.getElementById("machine-list");

// Function to update the machine display
function updateMachinesDisplay() {
  machineListEl.innerHTML = ""; // Clear the machine list
  for (let i = 0; i < machines; i++) {
    const machine = document.createElement("div");
    machine.className = "machine";
    machineListEl.appendChild(machine);
  }
}

// Serve customer action
serveCustomerBtn.addEventListener("click", () => {
  const income = customerIncome * machines;
  money += income;
  moneyEl.textContent = money;
  statusEl.textContent = `You earned $${income} from a customer!`;
  setTimeout(() => (statusEl.textContent = ""), 2000);
});

// Upgrade machine action
upgradeMachineBtn.addEventListener("click", () => {
  if (money >= machineUpgradeCost) {
    money -= machineUpgradeCost;
    machines += 1;
    moneyEl.textContent = money;
    machinesEl.textContent = machines;
    machineUpgradeCost = Math.floor(machineUpgradeCost * 1.5);
    upgradeMachineBtn.textContent = `Upgrade Machine ($${machineUpgradeCost})`;
    statusEl.textContent = `You upgraded a machine!`;
    updateMachinesDisplay(); // Update machines display
    setTimeout(() => (statusEl.textContent = ""), 2000);
  } else {
    statusEl.textContent = "Not enough money to upgrade!";
    setTimeout(() => (statusEl.textContent = ""), 2000);
  }
});

// Update button state
setInterval(() => {
  upgradeMachineBtn.disabled = money < machineUpgradeCost;
}, 100);

// Initial setup
updateMachinesDisplay();
