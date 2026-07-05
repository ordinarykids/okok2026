import { redirect } from "next/navigation";

// The sesame landing is now the site root.
export default function SesamePage() {
  redirect("/");
}
