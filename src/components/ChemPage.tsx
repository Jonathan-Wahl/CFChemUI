import {Dispatch, SetStateAction, useEffect} from "react";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MoleculeStructure from "./MoleculeStructure.tsx";



export default function ChemPage(props: { result: object, setChem: Dispatch<SetStateAction<any>> }) {
    const sourcesMapping = {
        "idg": "IDG",
        "drugcentral": "DrugCentral",
        "refmet": "RefMet",
        "lincs": "LINCS",
        "reprotox": "Reprotox",
        "glygen": "GlyGen",
        // Add more mappings here as needed
    };
    return (
        <div id="chem-page" className="relative z-10">
            <button onClick={() => {
                props.setChem(undefined)
            }} className="btn-back">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
                <span>Back</span>
            </button>
            <div className="glass-container active p-3">
                <header className="mb-4">
                    <h1 className="text-3xl font-bold mb-2">{props.result.pert_name}</h1>
                    <span
                        className="text-secondary-100 bg-secondary rounded-full text-sm px-2 py-1">{props.result.moa}</span>
                </header>
                <section className="py-2">
                    <span className="text-xl"><b>SMILES: </b>{props.result.smiles}</span>
                </section>
                <section className="py-2">
                    <span className="text-xl"><b>Targets: </b>{props.result.target}</span>
                </section>
                <div>
                    <span className="text-xl"><b>Sources: </b></span>
                    <span>
                    {Object.keys(props.result.sources)
                        .filter(key => props.result.sources[key] === true)
                        .map(key => sourcesMapping[key] || key) // Use the mapping if available, otherwise use the original key
                        .join(', ')}
                    </span>
                </div>
                <section>
                    <MoleculeStructure
                        id="smile-svg"
                        structure={props.result.smiles}
                        width={350}
                        height={300}
                        svgMode
                    />
                </section>
            </div>
        </div>
    )
}
