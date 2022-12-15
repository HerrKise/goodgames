import { CommandItem } from "./CommandItem"


export const MatchesList = ({commands}) => {
    
    return (
        <ul className="flex flex-wrap gap-5 pt-5">
            {commands.map((command, i)=> {
                return (
                    <CommandItem key={i} command={command} id={i}/>
                )
            })}
        </ul>
    )
}