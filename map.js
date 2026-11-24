var map = new Datamap({
  element: document.getElementById("map"),
  projection: "mercator",
  responsive: true,
  fills: { defaultFill: "#c9d6dd" },
  geographyConfig: { highlightOnHover: false, popupOnHover: true, borderWidth: 0.5 },
  done: function (dm) {
    dm.svg.selectAll(".datamaps-subunit.ATA").remove();
    dm.svg.selectAll(".datamaps-subunit").each(function (g) {
      var c = window.COUNTRIES[g.id];
      if (c && c.live) { d3.select(this).classed("live", true); }
    });
    dm.svg.selectAll(".datamaps-subunit").on("click", function (g) {
      var c = window.COUNTRIES[g.id];
      if (c) { window.location.href = c.url; }
    });
  }
});
window.addEventListener("resize", function () { map.resize(); });
document.getElementById("q").addEventListener("input", function (e) {
  var v = e.target.value.toLowerCase();
  for (var id in window.COUNTRIES) {
    if (window.COUNTRIES[id].name.toLowerCase() === v) { window.location.href = window.COUNTRIES[id].url; break; }
  }
});
