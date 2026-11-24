import markdownIt from "markdown-it";

const md = markdownIt({ html: true, linkify: true });

// The text of a country file, without the settings block at the top.
const bodyOf = (item) => (item && item.rawInput ? item.rawInput.trim() : "");

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Every country you have written so far (one file per country in src/countries).
  eleventyConfig.addCollection("written", (api) =>
    api.getFilteredByGlob("src/countries/*.md")
  );

  // Find the written file for a country, if it exists.
  eleventyConfig.addFilter("entryFor", (written, slug) =>
    written.find((item) => item.fileSlug === slug)
  );

  // Does that file actually contain published text?
  eleventyConfig.addFilter("hasText", (entry) => bodyOf(entry).length > 0);

  // Turn the plain text of a country file into web page text.
  eleventyConfig.addFilter("renderText", (entry) => md.render(bodyOf(entry)));

  // Data the map needs: each country's name, page address, and whether it is published.
  eleventyConfig.addFilter("mapData", (list, written) => {
    const out = {};
    for (const c of list) {
      const entry = written.find((w) => w.fileSlug === c.slug);
      out[c.iso3] = { name: c.name, url: "/countries/" + c.slug + "/", live: bodyOf(entry).length > 0 };
    }
    return JSON.stringify(out);
  });

  return { dir: { input: "src", output: "_site" } };
}
