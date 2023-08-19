
				{
					const __sveltekit_8edjb3 = {
						base: new URL(".", location).pathname.slice(0, -1),
						env: {}
					};

					const element = document.body.firstElementChild;

					const data = [null,null];

					Promise.all([
						import("./app/immutable/entry/start.6bb00682.js"),
						import("./app/immutable/entry/app.f5ba2fe0.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 2],
							data,
							form: null,
							error: null
						});
					});
				}
			