

export function TopHeader() {
    return (
    <div className="flex flex-col justify-center align-middle bg-uchicago-red p-4">
        <div className="font-bold text-white text-center text-3xl">Levi Cherek</div>
        <div className="flex flex-row justify-center space-x-7 align-middle text-white">
            <a href="/resume.pdf" download="instructions.pdf" className="underline">Resume</a>
            <a href="https://www.linkedin.com/in/levicherek/" className="underline">LinkedIn</a>
            <a href="https://ch.tetr.io/u/levi" className="underline">TETR.IO</a>
        </div>
    </div>);
}