import AppRouter from "./routes/AppRouter";
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <ThemeToggle />
      <Header />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}