export type MeasurementForm = {
  name: string;
  chest: string;
  waist: string;
  shoulder: string;
  sleeve: string;
  length: string;
  note: string;
};

export function buildWhatsAppUrl(phone: string, garmentName: string, form: MeasurementForm) {
  const lines = [
    "Hello Firoz Tailor, I would like to order the " + garmentName + ".",
    "",
    `Name: ${form.name || "Not provided"}`,
    `Chest: ${form.chest || "Not provided"} in`,
    `Waist: ${form.waist || "Not provided"} in`,
    `Shoulder: ${form.shoulder || "Not provided"} in`,
    `Sleeve: ${form.sleeve || "Not provided"} in`,
    `Garment length: ${form.length || "Not provided"} in`,
    `Notes: ${form.note || "None"}`,
    "",
    "Please share fabric options and the final quote.",
  ];
  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`;
}
