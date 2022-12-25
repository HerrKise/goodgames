import { Button } from "../UI/Button"


export const NewsList = ({news}) => {

    return (
        <ul className="space-y-4 ">
            {news.map((newsitem, i) => {
                return (
                    <li key={i} className="bg-grey p-4 space-y-[10px] relative rounded-xl">
                        <div className="bg-gradient-to-b from-darkgrey to-0 w-full h-full absolute top-0 left-0"></div>
                        <div className="relative z-10">
                            <div className="flex w-full justify-between items-center mb-1">
                                <h3 className="h3">{newsitem.title}</h3>
                                <div className={newsitem.important ? "flex items-center bg-yellow text-darkgrey text-xs font-bold rounded py-[5px] px-3" : "hidden"}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.40625 7.5C1.40625 4.13437 4.13437 1.40625 7.5 1.40625C10.8656 1.40625 13.5938 4.13437 13.5938 7.5C13.5938 10.8656 10.8656 13.5938 7.5 13.5938C4.13437 13.5938 1.40625 10.8656 1.40625 7.5ZM7.5 5.15625C7.62432 5.15625 7.74355 5.20564 7.83146 5.29354C7.91936 5.38145 7.96875 5.50068 7.96875 5.625V7.96875C7.96875 8.09307 7.91936 8.2123 7.83146 8.30021C7.74355 8.38811 7.62432 8.4375 7.5 8.4375C7.37568 8.4375 7.25645 8.38811 7.16854 8.30021C7.08064 8.2123 7.03125 8.09307 7.03125 7.96875V5.625C7.03125 5.50068 7.08064 5.38145 7.16854 5.29354C7.25645 5.20564 7.37568 5.15625 7.5 5.15625ZM7.5 10.3125C7.62432 10.3125 7.74355 10.2631 7.83146 10.1752C7.91936 10.0873 7.96875 9.96807 7.96875 9.84375C7.96875 9.71943 7.91936 9.6002 7.83146 9.51229C7.74355 9.42439 7.62432 9.375 7.5 9.375C7.37568 9.375 7.25645 9.42439 7.16854 9.51229C7.08064 9.6002 7.03125 9.71943 7.03125 9.84375C7.03125 9.96807 7.08064 10.0873 7.16854 10.1752C7.25645 10.2631 7.37568 10.3125 7.5 10.3125Z" fill="black"/>
                                    </svg>
                                    <p className="ml-1 md:text-sm">Важное</p>
                                </div>
                            </div>
                            <div  className="p flex items-center space-x-1 pb-2">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.40625C4.13437 1.40625 1.40625 4.13437 1.40625 7.5C1.40625 10.8656 4.13437 13.5938 7.5 13.5938C10.8656 13.5938 13.5938 10.8656 13.5938 7.5C13.5938 4.13437 10.8656 1.40625 7.5 1.40625ZM7.96875 3.75C7.96875 3.62568 7.91936 3.50645 7.83146 3.41854C7.74355 3.33064 7.62432 3.28125 7.5 3.28125C7.37568 3.28125 7.25645 3.33064 7.16854 3.41854C7.08064 3.50645 7.03125 3.62568 7.03125 3.75V7.5C7.03125 7.75875 7.24125 7.96875 7.5 7.96875H10.3125C10.4368 7.96875 10.556 7.91936 10.644 7.83146C10.7319 7.74355 10.7812 7.62432 10.7812 7.5C10.7812 7.37568 10.7319 7.25645 10.644 7.16854C10.556 7.08064 10.4368 7.03125 10.3125 7.03125H7.96875V3.75Z" fill="white"/>
                                    </g>
                                </svg>
                                <p>{newsitem.time}</p>
                                <span>&nbsp;|&nbsp;</span>
                                <p>{newsitem.date}</p>
                            </div>
                            <p className="p break-words pt-5 border-t-[1px] border-white/30">{newsitem.description}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}