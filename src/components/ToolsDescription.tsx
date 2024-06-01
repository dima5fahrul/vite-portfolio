import Position from "./Position";
import workstations from "../../workstations.json";
import developmentTools from "../../developmentTools.json";
import productivities from "../../productivities.json";

interface Props {
    job: any,
}
const ToolsDescription = ({ job }:Props) => {
    return (
        <div className={`flex md:flex-row flex-col gap-5 items-start w-full p-4 mb-5`}>
            <div className="flex w-full flex-col justify-center h-full">
                <h3 className={`font-medium py-3 text-3xl`}>
                    {job.title}
                </h3>
                <div className={`flex flex-wrap gap-5`}>
                    {
                        job.title.toLowerCase().includes('workstation') ?
                        workstations.map((workstation: any) => <Position key={workstation.id} job={workstation} isResume={true} isTools={true}/>) :
                            job.title.toLowerCase().includes('development tools') ?
                                developmentTools.map((developmentTool: any) => <Position key={developmentTool.id} job={developmentTool} isResume={true} isTools={true}/>) :
                                job.title.toLowerCase().includes('productivity') ? productivities.map((productivity: any) => <Position key={productivity.id} job={productivity} isResume={true} isTools={true}/>) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ToolsDescription