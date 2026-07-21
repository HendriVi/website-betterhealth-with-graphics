import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, ClinicalPlate } from "../../components/ui";

const meta = {
  title: "BetterHealth/Design System",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Buttons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button variant="solid">Request consultation</Button>
      <Button variant="ghost">See how we measure it</Button>
    </div>
  ),
};

export const Plate: Story = {
  render: () => (
    <ClinicalPlate figure="Fig.02 — Biomarker panel" status="by domain">
      <h3>What the chemistry shows</h3>
      <p className="lead">Read across systems at once, never one marker in isolation.</p>
    </ClinicalPlate>
  ),
};
