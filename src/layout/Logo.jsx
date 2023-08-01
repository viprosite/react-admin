import { useState } from "react"

export default function Logo(props) {
    // console.log(props);
    const { collapsed } = props
    return (
        <div className="logo">
            <img height="50" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
            <span style={{ display: collapsed ? 'none' : 'block' }}>React Admin</span>
        </div>
    )
}