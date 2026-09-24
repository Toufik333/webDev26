import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");const _c = __vite__cjsImport0_react_compilerRuntime["c"];const useState = __vite__cjsImport1_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react_compilerRuntime from "/node_modules/.vite/deps/react_compiler-runtime.js?v=668a11ea";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5e2d2697";
import "/src/App.css";
import { useSelector, useDispatch } from "/node_modules/.vite/deps/react-redux.js?v=1487050d";
import { addTodo, removeTodo, toggleTodo, clearCompleted } from "/src/redux/todoSlice.js";
var _jsxFileName = "/Users/atomixmacos/Documents/GithubFiles/webDev26/practices/redux_practice/practiveredux/src/App.jsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=34d12b47";
var _s = $RefreshSig$();
function App() {
	_s();
	const $ = _c(31);
	if ($[0] !== "bb399ae6a97cb02e6e26205de8816645c6c9639c44a8ac88426e5c08357fced6") {
		for (let $i = 0; $i < 31; $i += 1) {
			$[$i] = Symbol.for("react.memo_cache_sentinel");
		}
		$[0] = "bb399ae6a97cb02e6e26205de8816645c6c9639c44a8ac88426e5c08357fced6";
	}
	const [text, setText] = useState("");
	const todos = useSelector(_temp);
	const dispatch = useDispatch();
	let t0;
	if ($[1] !== todos) {
		t0 = todos.filter(_temp2);
		$[1] = todos;
		$[2] = t0;
	} else {
		t0 = $[2];
	}
	const remainingCount = t0.length;
	let t1;
	if ($[3] !== dispatch || $[4] !== text) {
		const handleAddTodo = () => {
			if (text.trim() !== "") {
				dispatch(addTodo(text));
				setText("");
			}
		};
		t1 = (event) => {
			event.preventDefault();
			handleAddTodo();
		};
		$[3] = dispatch;
		$[4] = text;
		$[5] = t1;
	} else {
		t1 = $[5];
	}
	const handleSubmit = t1;
	let t2;
	if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = /* @__PURE__ */ _jsxDEV("header", {
			className: "todo-header",
			children: [
				/* @__PURE__ */ _jsxDEV("p", {
					className: "eyebrow",
					children: "Daily focus"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 42
				}, this),
				/* @__PURE__ */ _jsxDEV("h1", { children: "Todo App" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 80
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "subtitle",
					children: "Keep the important things moving."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 97
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 10
		}, this);
		$[6] = t2;
	} else {
		t2 = $[6];
	}
	let t3;
	if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = /* @__PURE__ */ _jsxDEV("label", {
			className: "sr-only",
			htmlFor: "todo-input",
			children: "New todo"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 10
		}, this);
		$[7] = t3;
	} else {
		t3 = $[7];
	}
	let t4;
	if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
		t4 = (event_0) => setText(event_0.target.value);
		$[8] = t4;
	} else {
		t4 = $[8];
	}
	let t5;
	if ($[9] !== text) {
		t5 = /* @__PURE__ */ _jsxDEV("input", {
			id: "todo-input",
			type: "text",
			value: text,
			onChange: t4,
			placeholder: "What needs doing?"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 10
		}, this);
		$[9] = text;
		$[10] = t5;
	} else {
		t5 = $[10];
	}
	let t6;
	if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
		t6 = /* @__PURE__ */ _jsxDEV("button", {
			type: "submit",
			children: "Add todo"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 76,
			columnNumber: 10
		}, this);
		$[11] = t6;
	} else {
		t6 = $[11];
	}
	let t7;
	if ($[12] !== handleSubmit || $[13] !== t5) {
		t7 = /* @__PURE__ */ _jsxDEV("form", {
			className: "todo-form",
			onSubmit: handleSubmit,
			children: [
				t3,
				t5,
				t6
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 10
		}, this);
		$[12] = handleSubmit;
		$[13] = t5;
		$[14] = t7;
	} else {
		t7 = $[14];
	}
	let t8;
	if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
		t8 = /* @__PURE__ */ _jsxDEV("h2", { children: "Your tasks" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 92,
			columnNumber: 10
		}, this);
		$[15] = t8;
	} else {
		t8 = $[15];
	}
	let t9;
	if ($[16] !== remainingCount) {
		t9 = /* @__PURE__ */ _jsxDEV("div", {
			className: "list-heading",
			children: [t8, /* @__PURE__ */ _jsxDEV("span", { children: [remainingCount, " remaining"] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 44
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 99,
			columnNumber: 10
		}, this);
		$[16] = remainingCount;
		$[17] = t9;
	} else {
		t9 = $[17];
	}
	let t10;
	if ($[18] !== dispatch || $[19] !== todos) {
		t10 = todos.length === 0 ? /* @__PURE__ */ _jsxDEV("p", {
			className: "empty-state",
			children: "Nothing here yet. Add your first task above."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 32
		}, this) : /* @__PURE__ */ _jsxDEV("ul", { children: todos.map((todo_0) => /* @__PURE__ */ _jsxDEV("li", {
			className: todo_0.completed ? "completed" : "",
			children: [
				/* @__PURE__ */ _jsxDEV("button", {
					className: "complete-button",
					type: "button",
					"aria-label": todo_0.completed ? `Mark ${todo_0.text} incomplete` : `Mark ${todo_0.text} complete`,
					onClick: () => dispatch(toggleTodo(todo_0.id)),
					children: todo_0.completed ? "✓" : ""
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 203
				}, this),
				/* @__PURE__ */ _jsxDEV("span", { children: todo_0.text }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 442
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					className: "remove-button",
					type: "button",
					onClick: () => dispatch(removeTodo(todo_0.id)),
					children: "Remove"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 468
				}, this)
			]
		}, todo_0.id, true, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 135
		}, this)) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 110
		}, this);
		$[18] = dispatch;
		$[19] = todos;
		$[20] = t10;
	} else {
		t10 = $[20];
	}
	let t11;
	if ($[21] !== t10 || $[22] !== t9) {
		t11 = /* @__PURE__ */ _jsxDEV("section", {
			className: "todo-list",
			"aria-live": "polite",
			children: [t9, t10]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 11
		}, this);
		$[21] = t10;
		$[22] = t9;
		$[23] = t11;
	} else {
		t11 = $[23];
	}
	let t12;
	if ($[24] !== dispatch || $[25] !== todos) {
		t12 = todos.some(_temp3) && /* @__PURE__ */ _jsxDEV("button", {
			className: "clear-button",
			type: "button",
			onClick: () => dispatch(clearCompleted()),
			children: "Clear completed"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 125,
			columnNumber: 33
		}, this);
		$[24] = dispatch;
		$[25] = todos;
		$[26] = t12;
	} else {
		t12 = $[26];
	}
	let t13;
	if ($[27] !== t11 || $[28] !== t12 || $[29] !== t7) {
		t13 = /* @__PURE__ */ _jsxDEV("main", {
			className: "todo-app",
			children: [
				t2,
				t7,
				t11,
				t12
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 134,
			columnNumber: 11
		}, this);
		$[27] = t11;
		$[28] = t12;
		$[29] = t7;
		$[30] = t13;
	} else {
		t13 = $[30];
	}
	return t13;
}
_s(App, "7J25hclUKgV3Hh8L6qTKiGwF5q8=", false, function() {
	return [useSelector, useDispatch];
});
_c2 = App;
function _temp3(todo_1) {
	return todo_1.completed;
}
function _temp2(todo) {
	return !todo.completed;
}
function _temp(state) {
	return state.todos;
}
export default App;
var _c2;
$RefreshReg$(_c2, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/atomixmacos/Documents/GithubFiles/webDev26/practices/redux_practice/practiveredux/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/atomixmacos/Documents/GithubFiles/webDev26/practices/redux_practice/practiveredux/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/Users/atomixmacos/Documents/GithubFiles/webDev26/practices/redux_practice/practiveredux/src/App.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }
