// "use client";

// import React from "react";
// import {
//     Avatar,
//     Button,
//     Menu,
//     MenuHandler,
//     MenuItem,
//     MenuList,
//     Typography,
// } from "@material-tailwind/react";
// import {
//     Cog6ToothIcon,
//     InboxArrowDownIcon,
//     LifebuoyIcon,
//     PowerIcon,
//     UserCircleIcon,
// } from "@heroicons/react/24/solid";
// import { useRouter } from "next/router";

// // profile menu component
// const profileMenuItems = [
//     {
//         label: "My Profile",
//         icon: UserCircleIcon,
//         url: `/profile`,
//     },
//     {
//         label: "Inbox",
//         icon: InboxArrowDownIcon,
//         url: `/inbox`,
//     },
//     {
//         label: "Sign Out",
//         icon: PowerIcon,
//     },
// ];

// export default function AvatarWithUserDropdown() {
//     let router = useRouter();
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     const closeMenu = (url) => {
//         setIsMenuOpen(false)
//         router.push(url && url)
//     };

//     return (
//         <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
//             <MenuHandler>
//                 <Button
//                     variant="text"
//                     color="blue-gray"
//                     className="flex items-center rounded-full p-0"
//                 >
//                     <Avatar
//                         variant="circular"
//                         size="md"
//                         alt="tania andrew"
//                         withBorder={true}
//                         color="blue-gray"
//                         className=" p-0.5"
//                         src="https://api.dicebear.com/9.x/initials/svg?seed=Najmiddin"
//                     />
//                 </Button>
//             </MenuHandler>
//             <MenuList className="p-1">
//                 {profileMenuItems.map((obj, key) => {
//                     const isLastItem = key === profileMenuItems.length - 1;
//                     return (
//                         <MenuItem
//                             key={obj.label}
//                             onClick={() => closeMenu(obj.url && obj.url)}
//                             className={`flex items-center gap-2 rounded ${isLastItem
//                                 ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//                                 : "hover:bg-gray-900/10 focus:bg-gray-900/10 active:bg-gray-900/10"
//                                 }`}
//                         >
//                             {React.createElement(obj.icon, {
//                                 className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                                 strokeWidth: 2,
//                             })}
//                             <Typography
//                                 as="span"
//                                 variant="small"
//                                 className="font-normal "
//                                 color={isLastItem ? "red" : "inherit"}
//                             >
//                                 {obj.label}
//                             </Typography>
//                         </MenuItem>
//                     );
//                 })}
//             </MenuList>
//         </Menu>
//     );
// }




"use client";

import React from "react";
import {
    Avatar,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
} from "@material-tailwind/react";
import {
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation"; // useRouter from next/navigation

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
        url: `/profile`,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
        url: `/inbox`,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

export default function AvatarWithUserDropdown() {
    const router = useRouter(); // useRouter from next/navigation
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = (url) => {
        setIsMenuOpen(false);
        if (url) {
            router.push(url);
        }
    };

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center rounded-full p-0"
                >
                    <Avatar
                        variant="circular"
                        size="md"
                        alt="tania andrew"
                        withBorder={true}
                        color="blue-gray"
                        className="p-0.5"
                        src="https://api.dicebear.com/9.x/initials/svg?seed=Najmiddin"
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map((obj, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={obj.label}
                            onClick={() => closeMenu(obj.url)}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : "hover:bg-gray-900/10 focus:bg-gray-900/10 active:bg-gray-900/10"
                                }`}
                        >
                            {React.createElement(obj.icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {obj.label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}