import { CommandItem } from "./CommandItem";

export const MatchesList = ({ matches }) => {
    return (
        <ul className="flex flex-wrap gap-5 pt-5">
            {matches.map((match, i) => {
                return <CommandItem key={i} match={match} id={i} />;
            })}
        </ul>
    );
};
