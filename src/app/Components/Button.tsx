// "use client"
// interface IProps{
//     text:string
// }

// const button=(props: IProps)=>{
//     const handleClick =()=>{
//         alert("Button Clicked");
//     }
//     return(
//         <button onClick={handleClick} className="text-white bg-blue-600 px-4 py-2">
//             {props.text}
//         </button>
//     )
// }
// export default button

"use client";

interface IProps {
    text: string;
}

const Button = (props: IProps) => {
    const handleClick = () => {
        alert("Button Clicked");
    };
    const buttonColor = props.text === "button" ? "bg-green-500" : "bg-blue-blue-900";
    return (
        // <button onClick={handleClick} className="text-white bg-blue-500 px-4 py-2 rounded-xl">
        <button onClick={handleClick} className={`text-white ${buttonColor} px-4 py-2 rounded-xl`}>
            {props.text}
            
        </button>
    );
};

export default Button;