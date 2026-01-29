
import { Link } from 'react-router-dom';
import { Atom, Code2, Briefcase, Rocket, ArrowRight, BookOpen } from 'lucide-react';

function LandingPage() {
    const modules = [
        {
            id: 'barc',
            title: 'BARC',
            path: '/barcoa',
            icon: Atom,
            color: 'bg-zinc-900',
            hoverColor: 'hover:bg-zinc-800',
            textColor: 'text-white'
        },
        {
            id: 'cognizant',
            title: 'Cognizant',
            path: '/ctsta',
            icon: Code2,
            color: 'bg-teal-600',
            hoverColor: 'hover:bg-teal-700',
            textColor: 'text-white'
        },
        {
            id: 'tcs',
            title: 'TCS',
            path: '/tcsinter',
            icon: Briefcase,
            color: 'bg-violet-600',
            hoverColor: 'hover:bg-violet-700',
            textColor: 'text-white'
        },
        {
            id: 'hashedin',
            title: 'HashedIn',
            path: '/hashedin',
            icon: Rocket,
            color: 'bg-sky-600',
            hoverColor: 'hover:bg-sky-700',
            textColor: 'text-white'
        },
    ];

    return (
        <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-slate-100">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4 text-blue-600">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Interview Prep Hub
                    </h1>
                    <p className="text-slate-500 mt-2 text-sm">
                        Select your preparation module
                    </p>
                </div>

                {/* Buttons Stack */}
                <div className="flex flex-col gap-3">
                    {modules.map((module) => (
                        <Link
                            key={module.id}
                            to={module.path}
                            className={`
                                group relative flex items-center w-full p-4 rounded-xl transition-all duration-200
                                border border-slate-200 hover:border-transparent hover:shadow-md hover:-translate-y-0.5
                                ${module.color} hover:${module.color} bg-white
                            `}
                        >
                            <div className={`
                                flex items-center justify-center w-10 h-10 rounded-lg mr-4 transition-colors
                                bg-slate-50 group-hover:bg-white/20
                            `}>
                                <module.icon className={`
                                    w-5 h-5 text-slate-600 group-hover:text-white transition-colors
                                `} />
                            </div>

                            <div className="flex-1 text-left">
                                <span className={`
                                    font-semibold text-slate-700 group-hover:text-white block transition-colors
                                `}>
                                    {module.title}
                                </span>
                            </div>

                            <ArrowRight className={`
                                w-5 h-5 text-slate-400 group-hover:text-white opacity-0 group-hover:opacity-100
                                transform translate-x-[-10px] group-hover:translate-x-0 transition-all
                            `} />
                        </Link>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center border-t border-slate-100 pt-6">
                    <p className="text-xs text-slate-400">
                        © 2026 Exam Prep Hub
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
