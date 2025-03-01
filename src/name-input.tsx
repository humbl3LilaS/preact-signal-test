import {nameStore} from "./store.ts";
import {useRef} from "react";


const NameInput = () => {
    console.log("NameInput Render", new Date().getTime());
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={"my-5 flex flex-col gap-y-4"}>
            <input type="text" id={"name"} className={"px-2 py-1.5 border border-gray-400 rounded-lg"}
                   ref={inputRef}
            />
            <button className={"w-fit px-4 py-2 rounded bg-black text-white cursor-pointer"} type={"button"}
                    onClick={
                        () => {
                            console.log("clicked");
                            nameStore.value = inputRef?.current?.value ?? "";
                        }
                    }
            >
                Submit
            </button>
        </div>
    );
};

export default NameInput;