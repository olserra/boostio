import { Footer, Navbar } from ".";

const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-primary-black overflow-hidden">
        <Navbar />
        {children}
        <Footer />
    </div>
);

export default Layout;
