import React from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { useStateValue } from './StateProvider';

export default function Header() {

    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                {/* AVatar for loggedIn User */}
                <Avatar
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />

                {/* Time icon */}
                <AccessTimeIcon />

            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder="Search Slack Clone" />
            </div>

            <div className="header_right">
                <HelpOutlineOutlinedIcon />
            </div>

        </div>
    )
}
