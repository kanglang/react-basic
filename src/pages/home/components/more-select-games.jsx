
import React, { useEffect, useState, useLayoutEffect, Suspense } from 'react'
import { Card, NavBar, Toast, Image, Collapse, Selector, Button, Badge, Input, Space } from 'antd-mobile';

import '../../../../src/css/bottom.less'
import { useNavigate } from 'react-router-dom';
const MoreSeleectGames = ({
    onMorePlay,
    onChange,
    foot,
    projectList
}) => {
    const navigate = useNavigate()
    const spus = foot.default_spu;

    console.log("====选择场次=======>", spus)
    console.log("====localStorage=======>", localStorage)
    const checkedKeyCache = localStorage
    const checkedKeyList = Object.keys(checkedKeyCache)
    let cacheList = []
    checkedKeyList.forEach(key => {
        if (typeof Number(key) == "number" && !isNaN(Number(key))) {
            const cacheItem = localStorage.getItem(key);
            cacheList = cacheList.concat(JSON.parse(cacheItem))
        }
    });
    console.log("=======cacheList=====>", cacheList)

    const beIndex = foot.home_team_setup.indexOf("]");
    let home_team_setup = foot.home_team_setup.substring(0, beIndex + 1)
    let home_team_name = foot.home_team_setup.substring(beIndex + 1, foot.home_team_setup.length);
    const guestIndex = foot.guest_team_setup.indexOf("]");
    let guest_team_setup = foot.guest_team_setup.substring(0, guestIndex + 1)
    let guest_team_name = foot.guest_team_setup.substring(guestIndex + 1, foot.guest_team_setup.length);

    const [btnClassNameArry, setBtnClassNameArry] = useState(cacheList);
    const [spulist, setSpulist] = useState(spus)
    const [homename, setHomename] = useState(home_team_name);
    const [homesetup, setHomesetup] = useState(home_team_setup);
    const [guestname, setGuestname] = useState(guest_team_name)
    const [guestsetup, setGuestsetup] = useState(guest_team_setup)

    useEffect(() => {
        setSpulist(spus)
    }, [spus])

    useEffect(()=>{
        setBtnClassNameArry(cacheList)
    },[btnClassNameArry.length])

    // 选中button，多选
    const handleSelect = (itemChild) => {
        console.log("=======itemChild>", itemChild)
        console.log("=======btnClassNameArry>", btnClassNameArry)
        // 如果点击的在数组中已经存在，则从数组删除，否则，添加到数组
        if (btnClassNameArry.indexOf(itemChild) > -1) {
            btnClassNameArry.splice(btnClassNameArry.indexOf(itemChild), 1);
        } else {
            btnClassNameArry.push(itemChild);
        }

        const newBtnClassNameArry = [...btnClassNameArry]; // 深拷贝

        // 改变state状态值
        if (newBtnClassNameArry.length <= 0) {
            localStorage.removeItem(foot.id)
        }
        onChange && onChange(newBtnClassNameArry)
        setBtnClassNameArry(newBtnClassNameArry)
    }



    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: "rgb(247, 247, 247)", paddingTop: '8px', paddingBottom: "8px" }}>
            <div style={{ display: 'flex', width: "60px", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: "8px" }}>
                <div style={{ fontSize: "12px", color: '#666' }}>{foot.type_number}</div>
                <div style={{
                    backgroundColor: '#000000', paddingLeft: "4px", paddingRight: '4px',
                    fontSize: '12px', color: 'white'
                }}>
                    {foot.name}
                </div>
                <div style={{ fontSize: "12px", color: '#666' }}>
                    {foot.time_end.substring(10, 16)}
                </div>
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ fontSize: '8px', color: 'gray', textAlign: 'center' }}>
                        <div>{homesetup}</div>
                        <div>{homename}</div>
                    </div>
                    <div style={{ marginLeft: '16px', marginRight: '16px', fontSize: '16px', color: '#333333' }}>
                        {foot.home_team} VS {foot.guest_team}
                    </div>
                    <div style={{ fontSize: '8px', color: 'gray', textAlign: 'center' }}>
                        <div>{guestsetup}</div>
                        <div>{guestname}</div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'right' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '20px', justifyContent: 'space-around' }}>
                        <div style={{ display: "flex", backgroundColor: 'gray', color: 'white', fontSize: '8px', borderRadius: '40px', width: "16px", height: '16px', justifyContent: 'center', alignItems: 'center' }}>
                            0
                        </div>
                        {
                            (foot && foot.let_the_ball && (Number(foot.let_the_ball) > 0)) ?
                                <div style={styles.letball2}>
                                    {foot.let_the_ball}
                                </div> :
                                <div style={styles.letball}>
                                    {foot.let_the_ball}
                                </div>
                        }

                    </div>
                    <div style={{ display: 'flex', paddingLeft: "8px", paddingRight: "8px", paddingTop: "8px" }}>
                        {/* 循环比分 */}
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {spulist && spulist.length && spulist.map((itemChild, index) => {
                                console.log("========spulist========>", itemChild)
                                return (
                                    <div
                                        style={btnClassNameArry.indexOf(itemChild) > -1 ? {
                                            width: '33%',
                                            borderRadius: 0,
                                            flexDirection: 'row',
                                            marginBottom: '0.5px',
                                            marginRight: "0.5px",
                                            fontSize: "12px",
                                            paddingTop: '8px',
                                            paddingBottom: '8px',
                                            backgroundColor: '#CC0002',
                                            textAlign: 'center',
                                            color: '#fff'
                                        } : {
                                            width: '33%',
                                            borderRadius: 0,
                                            flexDirection: 'row',
                                            marginBottom: '0.5px',
                                            marginRight: "0.5px",
                                            fontSize: "12px",
                                            paddingTop: '8px',
                                            paddingBottom: '8px',
                                            backgroundColor: '#FFF',
                                            textAlign: 'center',
                                            color: "#333"
                                        }}
                                        key={index}
                                        onClick={() => {
                                            handleSelect(itemChild);
                                        }}
                                    >
                                        <div style={btnClassNameArry.indexOf(itemChild) > -1 ? {} : { color: '#333' }}>{itemChild.attribute_value}{itemChild.unit}</div>
                                        {/* <div style={btnClassNameArry.indexOf(itemChild) > -1 ? {} : { color: '#888' }}>{itemChild.unit}</div> */}
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div style={{
                            backgroundColor: 'white', width: "20px", fontSize: "10px",
                            display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: "0.5px", textAlign: 'center'
                        }}
                            onClick={() => {
                                onMorePlay && onMorePlay(foot)

                                // navigate("/morePlay", {
                                //     state: {
                                //         projectList: JSON.stringify(projectList),
                                //         foot: JSON.stringify(foot)
                                //     }
                                // })
                            }}>
                            <div>更多玩法</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >



    );
}

export default MoreSeleectGames;
const styles = {
    ruleTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "8px",
        paddingTop: "8px",
        background: "#e6e6e6",
        fontSize: "16px"
    },
    letball: {
        display: "flex", backgroundColor: '#CC0002', color: 'white', fontSize: '6px',
        borderRadius: '40px', width: "16px", height: '16px', justifyContent: 'center', alignItems: 'center'
    },
    letball2: {
        display: "flex", backgroundColor: '#a0e148', color: 'white', fontSize: '6px',
        borderRadius: '40px', width: "16px", height: '16px', justifyContent: 'center', alignItems: 'center'
    },
}