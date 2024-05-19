
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Card, NavBar, Toast, Image, Collapse, Selector, Button, Badge, Input, Space } from 'antd-mobile';

import '../../../../src/css/bottom.less'
const MoreSelBtn = ({
    type,
    data,
    onChange,
    defaultValue,
    foot
}) => {
    console.log(defaultValue, defaultValue)
    const [btnClassNameArry, setBtnClassNameArry] = useState([]);

    // 选中button，多选
    const handleSelect = (itemChild) => {
        // 如果点击的在数组中已经存在，则从数组删除，否则，添加到数组
        if (btnClassNameArry.indexOf(itemChild) > -1) {
            btnClassNameArry.splice(btnClassNameArry.indexOf(itemChild), 1);
        } else {
            btnClassNameArry.push(itemChild);
        }

        const newBtnClassNameArry = [...btnClassNameArry]; // 深拷贝
        // console.log("=======newBtnClassNameArry>", newBtnClassNameArry)
        // 改变state状态值
        onChange && onChange(newBtnClassNameArry)
        setBtnClassNameArry(newBtnClassNameArry)
    }

    return (
        <div style={{ display: 'flex', paddingLeft: "8px", paddingRight: "8px", paddingTop: "8px" }}>
            {
                type == "胜平负" ?
                    <div style={{
                        width: "25px", backgroundColor: '#666', marginRight: "0.5px",
                        fontSize: "13px", color: '#fff', textAlign: 'center', 
                        justifyContent: "center", alignItems: "stretch"

                    }}>
                        <div>{type}</div>
                        <div style={Number(foot.let_the_ball) > 0 ?
                            { backgroundColor: "#4DB04B" } :
                            { backgroundColor: "#CC0002" }}
                        >
                            <div >主</div>{foot.let_the_ball}
                        </div>


                    </div> :
                    <div style={{
                        width: "25px", backgroundColor: '#666', marginRight: "0.5px",
                        fontSize: "13px", color: '#fff', textAlign: 'center', justifyContent: 'center', alignItems: 'center',
                        display: "flex"
                    }}>
                        {type}
                    </div>

            }

            <div style={{ flex: 1 }}>
                {data && data.length && data.map((itemChild) => {
                    return (
                        <Button
                            style={{
                                width: '33%', "--border-radius": 0,
                                marginBottom: '0.5px', marginRight: "0.5px",
                                fontSize: "13px", paddingTop: '3px', paddingBottom: '3px'
                            }}
                            key={itemChild.id}
                            color={btnClassNameArry.indexOf(itemChild) > -1 ? "danger" : "default"}
                            onClick={() => {
                                handleSelect(itemChild);
                            }}
                        >
                            <div style={btnClassNameArry.indexOf(itemChild) > -1 ? {} : { color: '#333' }}>{itemChild.attribute_value}</div>
                            <div style={btnClassNameArry.indexOf(itemChild) > -1 ? {} : { color: '#888' }}>{itemChild.unit}</div>
                        </Button>
                    )
                })
                }
            </div>
        </div>
    );
}

export default MoreSelBtn;
const styles = {
    ruleTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "8px",
        paddingTop: "8px",
        background: "#e6e6e6",
        fontSize: "16px"
    }
}