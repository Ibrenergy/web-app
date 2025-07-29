import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 ${className}`}>
      <Navigation />
      <main className="container mx-auto px-6 py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}