const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="max-w-2xl bg-white p-10 rounded-xl shadow-xl border border-gray-100 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Insights Value Hub Prototypes</h1>
                <p className="text-gray-600 mb-8 text-lg">
                    Welcome to the early concept viewer for the "Insights Value Hub" website.
                    Use the navigation bar above to explore the different aesthetic and structural directions we are considering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="bg-brand-lightGreen p-4 rounded-lg">
                        <h3 className="font-semibold text-brand-dark mb-1">Concept 1: Minimalist Wellness</h3>
                        <p className="text-sm text-brand-green">Clean, airy, light greens & creams. Clinical but approachable.</p>
                    </div>
                    <div className="bg-brand-lightGreen p-4 rounded-lg">
                        <h3 className="font-semibold text-brand-dark mb-1">Concept 2: Vibrant Ecosystem</h3>
                        <p className="text-sm text-brand-green">Dynamic, bold structural blocks, high-contrast imagery.</p>
                    </div>
                    <div className="bg-brand-lightGreen p-4 rounded-lg">
                        <h3 className="font-semibold text-brand-dark mb-1">Concept 3: Institutional Data</h3>
                        <p className="text-sm text-brand-green">Professional, highly organized, data and metric-forward.</p>
                    </div>
                    <div className="bg-brand-lightGreen p-4 rounded-lg">
                        <h3 className="font-semibold text-brand-dark mb-1">Concept 4: Innovation Hub</h3>
                        <p className="text-sm text-brand-green">Sleek, tech-forward, dark mode with glowing brand yellow.</p>
                    </div>
                    <div className="bg-brand-lightGreen p-4 rounded-lg md:col-span-2">
                        <h3 className="font-semibold text-brand-dark mb-1">Concept 5: Earth to Table (Storytelling)</h3>
                        <p className="text-sm text-brand-green">Warm, narrative-driven, full-screen emotive photography.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
