(function () {
  var STORAGE_KEY = "peach2026-checklist-v1";
  var checkboxes = Array.prototype.slice.call(document.querySelectorAll('.item input[type="checkbox"]'));
  var barLength = 24;

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function updatePhaseCounts() {
    document.querySelectorAll("section.phase").forEach(function (section) {
      var boxes = section.querySelectorAll('.item input[type="checkbox"]');
      var done = 0;
      boxes.forEach(function (b) {
        if (b.checked) done++;
      });
      var badge = section.querySelector("[data-count]");
      if (badge) badge.textContent = done + " / " + boxes.length;
    });
  }

  function updateGlobal() {
    var total = checkboxes.length;
    var done = checkboxes.filter(function (b) {
      return b.checked;
    }).length;
    var pct = total ? done / total : 0;
    var filled = Math.round(pct * barLength);
    var bar = "[" + "█".repeat(filled) + "░".repeat(barLength - filled) + "]";
    document.getElementById("bar").textContent = bar;
    document.getElementById("count").textContent = done + " / " + total;
  }

  function persist() {
    var state = {};
    checkboxes.forEach(function (b) {
      state[b.id] = b.checked;
    });
    saveState(state);
  }

  function refreshAll() {
    updatePhaseCounts();
    updateGlobal();
  }

  var state = loadState();
  checkboxes.forEach(function (b) {
    if (state[b.id]) b.checked = true;
    b.addEventListener("change", function () {
      persist();
      refreshAll();
    });
  });

  var resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      checkboxes.forEach(function (b) {
        b.checked = false;
      });
      persist();
      refreshAll();
    });
  }

  refreshAll();
})();
