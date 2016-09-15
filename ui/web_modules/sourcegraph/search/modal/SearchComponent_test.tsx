import expect from "expect.js";
import * as React from "react";

import {SearchComponent} from "sourcegraph/search/modal/SearchComponent";
import {renderToString} from "sourcegraph/util/testutil/componentTestUtils";

const data = {
	tag: null,
	tab: null,
	input: "",
	selected: 0,
	results: new Map(),
};

describe("SearchComponent", () => {
	it("should show category selector", () => {
		const o = renderToString(<SearchComponent data={data}/>);
		expect(o).to.contain("JUMP TO");
	});
});
