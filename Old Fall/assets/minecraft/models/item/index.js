const data = require("./items")
for (const [item, d] of Object.entries(data)) {
    require("fs").writeFileSync(require("path").join(__dirname, `${item}.json`), JSON.stringify(
    {
	parent: Array.isArray(d) ? "item/generated" : `${d.parent}`,
	textures: {
		layer0: `${d.parent?.includes("block") ? "block" : "item"}/${item}`
	},
	overrides: (Array.isArray(d) ? d : d.items).map((x, i) => ({
        predicate: {
            custom_model_data: i + 1
        },
        model: `smpearth:${x}`
    }))
}
    )) 
}