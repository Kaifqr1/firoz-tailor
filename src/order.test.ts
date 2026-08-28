import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl } from "./order";

describe("Firoz Tailor WhatsApp order flow", () => {
  it("builds an encoded WhatsApp request for the selected garment", () => {
    const url = buildWhatsAppUrl("917039081439", "The Bandhgala", {
      name: "Aamir & Sons",
      chest: "40",
      waist: "34",
      shoulder: "18",
      sleeve: "24",
      length: "29",
      note: "Navy blue, please",
    });

    expect(url).toContain("https://wa.me/917039081439?text=");
    expect(decodeURIComponent(url)).toContain("Aamir & Sons");
    expect(decodeURIComponent(url)).toContain("The Bandhgala");
    expect(decodeURIComponent(url)).toContain("Navy blue, please");
  });

  it("uses clear placeholders when measurements are omitted", () => {
    const url = buildWhatsAppUrl("917039081439", "The Linen Shirt", {
      name: "Sameer",
      chest: "",
      waist: "",
      shoulder: "",
      sleeve: "",
      length: "",
      note: "",
    });

    expect(decodeURIComponent(url)).toContain("Chest: Not provided in");
    expect(decodeURIComponent(url)).toContain("Notes: None");
  });
});
