import NamePlate from "./name-plate.tsx";
import NameInput from "./name-input.tsx";


function App() {
    console.log("app render", new Date().getTime());
    return (
        <main>
            <section className={"h-screen w-screen flex items-center justify-center"}>
                <div className={"flex-1 max-w-4xl p-10 border border-black rounded-xl shadow-lg"}>
                    <h1 className={"text-xl font-semibold"}>Change the name</h1>
                    <NameInput/>
                    <NamePlate/>
                </div>


            </section>
        </main>
    )

}

export default App
