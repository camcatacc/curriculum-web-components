// Modules
import getOnScrollMotionFromOutsideOptions, { getMotionFromOutsideVariants } from "utils/getMotionFromOutsideOptions";

// Tests
describe("getOnScrollMotionFromOutsideOptions", () => {
	it("Returns the correct value", () => {
		const options = getOnScrollMotionFromOutsideOptions(true, "fromBottom", 100);
		const variants = getMotionFromOutsideVariants("fromBottom", 100);
		expect(options).toEqual({
			variants: { offscreen: variants.initial, onscreen: variants.animation },
			initial: "offscreen",
			whileInView: "onscreen",
			viewport: { once: true, amount: 0.6 }
		});
	});
});
