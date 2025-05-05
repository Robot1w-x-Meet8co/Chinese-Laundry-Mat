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
const notificationsEl = document.getElementById("notifications");

// Function to show notifications
function showNotification(message) {
  statusEl.textContent = message;
  notificationsEl.classList.add("show");
  setTimeout(() => notificationsEl.classList.remove("show"), 2000);
}

// Function to update the machine display
function updateMachinesDisplay() {
  machineListEl.innerHTML = ""; // Clear the machine list
  for (let i = 0; i < machines; i++) {
    const machine = document.createElement("div");
    machine.className = "machine";
    machine.textContent = "🧺"; // Use a laundry basket emoji
    machineListEl.appendChild(machine);
  }
}

// Serve customer action
serveCustomerBtn.addEventListener("click", () => {
  const income = customerIncome * machines;
  money += income;
  moneyEl.textContent = money;
  showNotification(`You earned $${income} from a customer!`);
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
    updateMachinesDisplay(); // Update machines display
    showNotification("You upgraded a machine!");
  } else {
    showNotification("Not enough money to upgrade!");
  }
});

// Update button state
setInterval(() => {
  upgradeMachineBtn.disabled = money < machineUpgradeCost;
}, 100);

// Initial setup
updateMachinesDisplay();
