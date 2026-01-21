import { createElementBlock, createElementVNode, openBlock } from "vue";
var _hoisted_1 = { class: "outlines-wrapper" }, Outlines_default = {
	__name: "Outlines",
	props: {
		title: {
			type: String,
			default: "My Outlines"
		},
		outlines: {
			type: Array,
			default: () => []
		}
	},
	setup(i) {
		return (i, a) => (openBlock(), createElementBlock("div", _hoisted_1, [...a[0] ||= [createElementVNode("h1", null, "comming soon...", -1)]]));
	}
}, src_default = { install(e) {
	e.component("Outlines", Outlines_default);
} };
export { Outlines_default as Outlines, src_default as default };
