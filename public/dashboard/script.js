async function loadStatus() {
  const res = await fetch('/override.config.json');
  const data = await res.json();
  document.getElementById('status').textContent = JSON.stringify(data, null, 2);
}

async function loadLogs() {
  const res = await fetch('/api/override-log');
  const data = await res.json();
  const logs = data.logs.map(log => `<li>${log.prompt} → ${log.result}</li>`).join('');
  document.getElementById('logs').innerHTML = logs;
}

async function getVault() {
  const q = document.getElementById('vaultQuery').value;
  const res = await fetch('/api/vault-response?query=' + encodeURIComponent(q));
  const data = await res.json();
  document.getElementById('vaultResult').textContent = JSON.stringify(data, null, 2);
}

async function checkToken() {
  const t = document.getElementById('tokenCheck').value;
  const res = await fetch('/api/delegate-validator?token=' + encodeURIComponent(t));
  const data = await res.json();
  document.getElementById('tokenResult').textContent = JSON.stringify(data, null, 2);
}

loadStatus();
loadLogs();
