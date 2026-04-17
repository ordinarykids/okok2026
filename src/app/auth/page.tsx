import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Auth",
  robots: { index: false, follow: false },
};

export default function AuthPage() {
  return (
    <PageWrapper>
      <AuthForm />
    </PageWrapper>
  );
}
