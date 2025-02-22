// "use client";
// import * as React from "react";
// import Stack from "@mui/joy/Stack";
// import Typography from "@mui/joy/Typography";
// import CircularProgress from "@mui/joy/CircularProgress";
// import { useCountUp } from "use-count-up";
// import Image from "next/image"

// interface CircularProgressCountUpProps {
//   start?: number;
//   end: number;
//   duration?: number;
//   size?: "sm" | "md" | "lg";
//   image: string;
//   title: string;
// }

// export default function CircularProgressCountUp({
//   start = 0,
//   end,
//   duration = 1,
//   size = "lg",
//   image,
//   title,
// }: CircularProgressCountUpProps) {
//   const { value } = useCountUp({
//     isCounting: true,
//     duration,
//     start,
//     end,
    
//   });

//   return (
//     <div className="flex justify-center items-center">
// <Stack direction="row" spacing={8} sx={{ alignItems: "center", flexWrap: "wrap" }}>
//         <Stack spacing={2}>
//           <div className="flex flex-col items-center space-y-4">
//             <CircularProgress
//               size={size}
//               determinate
//               value={value as number}
//               sx={{
//                 "--CircularProgress-progressColor": "#FD6F00", // Filled Progress Ring Color
//                 "--CircularProgress-trackColor": "rgba(217, 217, 217, 0.2)", // Background Ring Color (20% Opacity)
//               }}
//             >
//               <Image src={image} alt={title} width={35} height={35} />
//             </CircularProgress>
//             <Typography className="text-[#FD6F00] text-lg font-medium">{value}%</Typography>
//             <h5 className="text-lg font-medium">{title}</h5>
//           </div>
//         </Stack>
//       </Stack>
//     </div>
//   );
// }





"use client";
import * as React from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import Image from "next/image";

interface CircularProgressCountUpProps {
  start?: number;
  end: number;
  duration?: number;
  size?: number;
  thickness?: number;
  title: string;
  image: string;
}

export default function CircularProgressCountUp({
  start = 0,
  end,
  duration = 1,
  size = 150, // Increased size
  thickness = 6, // Thinner ring
  title,
  image,
}: CircularProgressCountUpProps) {
  const { value } = useCountUp({
    isCounting: true,
    duration,
    start,
    end,
  });

  return (
    <div className="flex justify-center items-center scale-110">
      <Stack direction="row" spacing={4} sx={{ alignItems: "center", flexWrap: "wrap" }}>
        <Stack spacing={2}>
          <div className="flex flex-col items-center space-y-1">
            <CircularProgress
              size={size > 100 ? "lg" : size > 75 ? "md" : "sm"}
              thickness={thickness}
              determinate
              value={value as number}
              sx={{
                "--CircularProgress-progressColor": "#FD6F00", // Filled Progress Ring Color
                "--CircularProgress-trackColor": "rgba(217, 217, 217, 0.2)", // Background Ring Color (20% Opacity)
              }}
            >
              <Image src={image} alt={title} width={30} height={30} />
            </CircularProgress>
            <Typography className="text-[#FD6F00] text-lg font-medium">{value}%</Typography>
            <h5 className="text-lg font-medium opacity-75">{title}</h5>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
