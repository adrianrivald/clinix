import { ResetPasswordContent } from "../../sections/auth/reset-password-view";

export default function ResetPasswordPage() {
  return (
    <>
      <head>
        <title>Memos Healthcare CRM</title>
        <meta
          name="description"
          content="Sistem CRM Healthcare yang dirancang untuk beradaptasi dengan anda bekerja, mengintegrasikan berbagai aspek operasional kesehatan ke dalam satu platform yang intuitif dan mudah digunakan"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="image"
          href="/assets/images/dokter-hero-mobile.webp"
        />
      </head>

      <main className="mt-[1.5rem]">
        <ResetPasswordContent />
      </main>
    </>
  );
}
