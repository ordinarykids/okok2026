import { redirect } from "next/navigation";

// The site lives behind the /ok section now (gated by middleware).
export default function HomePage() {
  redirect("/ok");
}
