import { createElementBlock, createElementVNode, openBlock, toDisplayString, watch } from "vue";
var __plugin_vue_export_helper_default = (e, a) => {
	let o = e.__vccOpts || e;
	for (let [e, s] of a) o[e] = s;
	return o;
}, _hoisted_1 = { class: "outlines-wrapper" }, _hoisted_2 = {
	key: 0,
	class: "info"
}, _hoisted_3 = {
	key: 1,
	class: "warning"
}, Outlines_default = /* @__PURE__ */ __plugin_vue_export_helper_default({
	__name: "Outlines",
	props: {
		title: {
			type: String,
			default: "My Outlines"
		},
		outlines: {
			type: Array,
			default: () => []
		},
		userId: {
			type: String,
			default: null
		},
		workspaceId: {
			type: String,
			default: null
		}
	},
	setup(l) {
		let u = l;
		return watch([() => u.userId, () => u.workspaceId], ([e, a]) => {
			console.log("Outlines package received:", {
				userId: e,
				workspaceId: a
			});
		}), (c, u) => (openBlock(), createElementBlock("div", _hoisted_1, [
			createElementVNode("h1", null, toDisplayString(l.title), 1),
			l.userId && l.workspaceId ? (openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("p", null, "User ID: " + toDisplayString(l.userId), 1), createElementVNode("p", null, "Workspace ID: " + toDisplayString(l.workspaceId), 1)])) : (openBlock(), createElementBlock("p", _hoisted_3, "Missing user or workspace information")),
			u[0] ||= createElementVNode("h2", null, "Coming soon...", -1)
		]));
	}
}, [["__scopeId", "data-v-e87d4289"]]), src_default = { install(e) {
	e.component("Outlines", Outlines_default);
} };
export { Outlines_default as Outlines, src_default as default };
