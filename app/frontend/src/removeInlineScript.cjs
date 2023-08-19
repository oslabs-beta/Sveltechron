// removeInlineScript.cjs
const glob = require("tiny-glob");
const path = require("path");
const fs = require("fs");

function hash(value) {
  let hash = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i) hash = (hash * 33) ^ value.charCodeAt(--i);
  } else {
    while (i) hash = (hash * 33) ^ value[--i];
  }
  return (hash >>> 0).toString(36);
}

async function clearBuild() {
  const filePath = path.resolve(__dirname, "../../extension/build/");

  console.log("Deleting files in", filePath);
  const files = fs.readdir(filePath, { encoding: "utf8" }, (err, files) => {
    if (err) console.log(err);
    else {
      for (const file of files) {
        fs.unlink(path.resolve(filePath, file), (err) => {
          if (err) console.log(err);
          else {
            console.log("\nDeleted file:", file);
          }
        });
      }
    }
  });

  return;
}

async function removeInlineScript(directory) {
  await clearBuild();

  console.log("Removing Inline Scripts");
  const scriptRegx = /<script>([\s\S]+)<\/script>/;
  const files = await glob("**/*.{html}", {
    cwd: path.resolve(__dirname, "../.svelte-kit/output/prerendered/pages"),
    dot: true,
    absolute: false,
    filesOnly: true,
  });
  files
    //append svelte application directory and relative file path for .html file from tiny-glob query
    // .map((f) => path.join(directory, f))
    .forEach((file) => {
      const filePath = path.resolve(directory, file);
      console.log(`edit file: ${filePath}`);
      const f = fs.readFileSync(filePath, { encoding: "utf-8" });

      const script = f.match(scriptRegx);
      if (script && script[1]) {
        const inlineContent = script[1]
          .replace("__sveltekit", "const __sveltekit")
          .replace(
            "document.currentScript.parentElement",
            "document.body.firstElementChild"
          );
        const fn = `/script-${hash(inlineContent)}.js`;
        const newHtml = f.replace(
          scriptRegx,
          `<script type="module" src="${fn}"></script>`
        );

        //save copies of files in the extension/build
        fs.writeFileSync(
          path.resolve(__dirname, `../../extension/build/${file}`),
          newHtml
        );
        fs.writeFileSync(
          path.resolve(__dirname, `../../extension/build/${fn}`),
          inlineContent
        );
        console.log(
          `Inline script extracted and saved at: ${path.resolve(
            __dirname,
            `../../extension/build/${fn}`
          )}`
        );
      }
    });
}

removeInlineScript(
  "/Users/admin/Documents/Codesmith/Sveltechron/app/frontend/.svelte-kit/output/prerendered/pages/"
);
// removeInlineScript(path.resolve(__dirname, "build"));
