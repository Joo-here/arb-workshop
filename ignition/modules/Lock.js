const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
  const lock = m.contract("josna", [
    "0x68cEBD0bE9A4DFB6d2cfe354132DC8fBCD63d7ed",
  ]);

  return { lock };
});

