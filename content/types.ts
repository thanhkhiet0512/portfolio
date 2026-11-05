/** A piece of copy in both languages. Wrap words in **double asterisks** to make them bold. */
export type L = { en: string; vi: string };

export type ProjectStatus = "soon" | "live" | "shipped";

export type Job = {
  company: string;
  role: string;
  period: L;
  project: L;
  bullets: L[];
  stack: string[];
  /** Slug of the related case study, if any. */
  projectSlug?: string;
};

export type Decision = { title: L; body: L };

export type Project = {
  slug: string;
  name: L;
  status: ProjectStatus;
  company: string;
  role: string;
  period: L;
  /** One or two lines, shown on the home page card. */
  summary: L;
  /** Longer description, shown at the top of the case study. */
  overview: L;
  /** What I did on this project. */
  responsibilities: L[];
  decisions: Decision[];
  decisionsTitle: L;
  /** Which diagram component to render (see components/diagrams.tsx). */
  diagram: "nexq" | "satori" | "esmiles";
  diagramTitle: L;
  stack: string[];
};
